from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.predictive,name="predictive"),
    path('trending/',views.trending,name="trending"),
    path('stats/upload',views.stat_upload,name="stat-upload"),
]
