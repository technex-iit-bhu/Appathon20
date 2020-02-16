from django.contrib import admin
from core import models


@admin.register(models.Farmer, models.Crop, models.Equipment, models.FarmerCropYield)
class Admin(admin.ModelAdmin):
    pass
