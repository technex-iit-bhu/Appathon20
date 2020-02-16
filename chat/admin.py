from django.contrib import admin
from chat import models

@admin.register(models.Chat, models.Client, models.FarmerChat, models.ExpertChat, models.Message)
class Admin(admin.ModelAdmin):
    pass
