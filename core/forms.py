from django import forms
from django.contrib.auth import authenticate
from core.models import *

class UserAuthenticateForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()

    def clean(self):
        data = super().clean()
        user = authenticate(username=data['username'], password=data['password'])
        if user:
            data['user'] = user
            return data
        raise forms.ValidationError('Invalid login credentials!')

class FarmerRegistrationForm(forms.ModelForm):

    class Meta:
        model = Farmer
        fields=['user','name','contact','state','district','land_area','language']
    
