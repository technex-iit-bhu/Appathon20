from django.contrib import admin
from community import models


@admin.register(models.Community, models.CommunityQuestion, models.CommunityFarmer, models.CommunityAnswer)
class Admin(admin.ModelAdmin):
    pass
