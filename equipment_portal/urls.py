from django.urls import path,include
from . import views
urlpatterns = [
    # path('', product_list,name="product-list"),
    path('', views.equipments_list, name='equipments-list'),
    path('new/', views.equipment_new, name='equipments-new'),
    path('<int:pk>/',views.equipment_detail,name="equipment-detail"),
]

