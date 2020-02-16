from django.urls import path
from community import views

urlpatterns = [
    path('community/', views.community_home, name='community-home'),
    path('questions/<int:ques_id>/', views.question_detail, name='question-detail'),
    path('questions/new/', views.question_new, name='question-new'),
]
