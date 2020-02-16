from channels.generic.websocket import AsyncJsonWebsocketConsumer, JsonWebsocketConsumer
from chat import models
# from channels.db import database_sync_to_async
from asgiref.sync import async_to_sync


class ChatConsumer(JsonWebsocketConsumer):
    MESSAGE_TYPE_NEW_CHAT = 'chat.msg.new_chat'
    MESSAGE_TYPE_NEW_MESSAGE = 'chat.msg.new_message'
    # MESSAGE_TYPE_UPDATE_MESSAGE = 'chat.msg.update_message'
    MESSAGE_TYPE_LIST_CHATS = 'chat.msg.list_chats'
    MESSAGE_TYPE_LIST_MESSAGES = 'chat.msg.list_messages'

    COMMAND_LIST_CHATS = 'chat.cmd.list_chats'
    COMMAND_CHAT_LIST_MESSAGES = 'chat.cmd.list_messages'
    COMMAND_CHAT_SEND_MESSAGE = 'chat.cmd.send_message'
    COMMAND_NEW_CHAT = 'chat.cmd.new_chat'
    COMMAND_DELETE_CHAT = 'chat.cmd.delete_chat'
    COMMAND_CHAT_DELETE_MESSAGE = 'chat.cmd.delete_message'

    def connect(self):
        self.user = self.scope['user']
        if not self.user.is_authenticated:
            return
        if self.update_client():
            self.accept()
            self.initialize()

    def initialize(self):
        self.list_chats()
        # self.join_chats()

    # @database_sync_to_async
    def clear_client(self):
        models.Client.objects.filter(user=self.user).delete()

    def disconnect(self, code):
        if not self.user.is_authenticated:
            return
        self.clear_client()

    # @database_sync_to_async
    def update_client(self):
        clients = models.Client.objects.filter(user=self.user)
        if clients:
            clients.update(channel_chat=self.channel_name)
        else:
            models.Client.objects.create(user=self.user, channel_chat=self.channel_name)
        return True

    def chat_send_message(self, event):
        self.send_json({
            "type": ChatConsumer.MESSAGE_TYPE_NEW_MESSAGE,
            "chat": event['chat'],
            "data": event['data'],
            "is_self": False #TODO
        })

    # @database_sync_to_async
    def _find_chats_for_user(self, user):
        expert_qs = models.ExpertChat.objects.find_for_user(user)
        farmer_qs = models.FarmerChat.objects.find_for_user(user)
        return [expert.chat for expert in expert_qs] + [farmer.chat for farmer in farmer_qs]

    def list_chats(self):
        chats = self._find_chats_for_user(self.user)
        data = [
            {
                "id": chat.id,
                "name": chat.name,
                "target_user": chat.get_target_user(self.user).first_name
            }
            for chat in chats
        ]
        self.send_json({
            "type": ChatConsumer.MESSAGE_TYPE_LIST_CHATS,
            "data": data
        })

    def list_chat_messages(self, chat_id):
        msgs = models.Message.objects.filter(chat_id=chat_id)
        data = [
            {
                "id": msg.id,
                "sender": msg.sender.first_name,
                "sent_at": str(msg.sent_at),
                "content": msg.content,
                "is_self": msg.sender == self.user
            }
            for msg in msgs
        ]
        self.send_json({
            "type": ChatConsumer.MESSAGE_TYPE_LIST_MESSAGES,
            "data": data,
            "chat": chat_id
        })

    def chat_send_message(self, chat_id, msg):
        chat = models.Chat.objects.get(id=chat_id)
        tuser = chat.get_target_user(self.user)
        inst = models.Message.objects.create(chat=chat, sender=self.user, content=msg)
        tclient = models.Client.objects.filter(user=tuser).first()
        sclient = models.Client.objects.filter(user=self.user).first()
        data = {
            "type": "broadcast.chat.new_message",
            "chat": chat_id,
            "msg": msg,
            "msg_id": inst.id,
            "sender": self.user.first_name
        }
        if tclient:
            data['is_self'] = False
            async_to_sync(self.channel_layer.send)(tclient.channel_chat, data)
        if sclient:
            data['is_self'] = True
            async_to_sync(self.channel_layer.send)(sclient.channel_chat, data)

    def broadcast_chat_new_message(self, event):
        self.send_json({
            "type": ChatConsumer.MESSAGE_TYPE_NEW_MESSAGE,
            "chat": event['chat'],
            "message": event['msg'],
            "message_id": event['msg_id'],
            "sender": event['sender'],
            "is_self": event['is_self']
        })

    def receive_json(self, content, **kwargs):
        command = content.pop('command')
        chat_id = content.get('chat_id', None)
        if command == ChatConsumer.COMMAND_LIST_CHATS:
            self.list_chats()
        elif command == ChatConsumer.COMMAND_CHAT_LIST_MESSAGES:
            self.list_chat_messages(chat_id)
        elif command == ChatConsumer.COMMAND_NEW_CHAT:
            self.create_or_join_chat(content)
        elif command == ChatConsumer.COMMAND_DELETE_CHAT:
            self.delete_chat(chat_id)
        elif command == ChatConsumer.COMMAND_CHAT_SEND_MESSAGE:
            msg = content.get('message')
            self.chat_send_message(chat_id, msg)
        else:
            print(f'Unsupported command: {command}')
