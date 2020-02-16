from django.urls import path, include
from core import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('auth/login/', views.user_login, name='auth-login'),
    path('auth/logout/', views.user_logout, name='auth-logout'),
    path('auth/register/',views.register,name="register"),
    path('equipments/',include('equipment_portal.urls')),
]
