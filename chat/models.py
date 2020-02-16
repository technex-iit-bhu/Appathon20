from django.db import models
from django.contrib.auth.models import User
from chat import managers


class Chat(models.Model):
    name = models.CharField(max_length=32)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

    def get_user1(self):
        try:
            return self.farmerchat.farmer1.user
        except Exception:
            return self.expertchat.expert.user

    def get_user2(self):
        try:
            return self.farmerchat.farmer2.user
        except Exception:
            return self.expertchat.farmer.user

    def get_target_user(self, user):
        u1 = self.get_user1()
        u2 = self.get_user2()
        return u1 if u2 == user else u2


class FarmerChat(models.Model):
    chat = models.OneToOneField(Chat, on_delete=models.CASCADE)
    farmer1 = models.ForeignKey('core.Farmer', on_delete=models.CASCADE, related_name='farmerchat1')
    farmer2 = models.ForeignKey('core.Farmer', on_delete=models.CASCADE, related_name='farmerchat2')

    objects = managers.FarmerChatQuerySet.as_manager()

    class Meta:
        unique_together = ('farmer1', 'farmer2')

    def __str__(self):
        return f'Farmers @{self.chat}'


class ExpertChat(models.Model):
    chat = models.OneToOneField(Chat, on_delete=models.CASCADE)
    farmer = models.ForeignKey('core.Farmer', on_delete=models.CASCADE)
    expert = models.ForeignKey('core.Expert', on_delete=models.CASCADE)

    objects = managers.ExpertChatQuerySet.as_manager()

    class Meta:
        unique_together = ('farmer', 'expert')

    def __str__(self):
        return f'Expert @{self.chat}'


class Client(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE,
        related_name='clients', null=True
    )
    channel_chat = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} @{self.channel_chat}'


class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    sent_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    def __str__(self):
        return f'{self.sender} @{self.chat}'