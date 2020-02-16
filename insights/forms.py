from django import forms
from core import models
class StatUploadForm(forms.ModelForm):
    class Meta:
        model = models.FarmerCropYield
        exclude=['timestamp']
