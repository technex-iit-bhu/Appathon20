from django import forms
from core.models import Equipment

class EquipmentUploadForm(forms.ModelForm):

    class Meta:
        model = Equipment
        fields = ['farmer','name','rental_price', 'start_dt','end_dt','category','description']
