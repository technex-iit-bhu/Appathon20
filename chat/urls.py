from django.urls import path
from chat import consumers, views

websocket_urlpatterns = [
    path('chat/', consumers.ChatConsumer)
]

urlpatterns = [
    path('chat/ui/', views.chat_interface, name='chat-interface'),
    path('chats/new/farmers/<int:farmer_id>/', views.new_farmer_chat, name='new-farmer-chat'),
    path('chats/new/experts/<int:expert_id>/', views.new_expert_chat, name='new-expert-chat'),
]
