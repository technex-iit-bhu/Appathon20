from django.shortcuts import render, redirect
from core import forms
from django.contrib.auth import login, logout, decorators
from django.contrib import messages
from core.models import *
from community.models import *

def homepage(request):
    return render(request, 'index.html')

def user_login(request):
    if request.method == 'POST':
        f = forms.UserAuthenticateForm(request.POST)
        if f.is_valid():
            login(request, f.cleaned_data['user'])
            return redirect('community-home')
    return render(request, 'login.html')

def register(request):
    template_name = 'register.html'
    if request.method == 'POST':
        post = request.POST
        email = post['email']
        password = post['password']
        user,created = User.objects.get_or_create(email=email,username=email)
        if not created:
            messages.warning(request,"User already registered")
            return render(request,template_name)
        user.set_password(password)
        user.save()
        data=dict(
            user=user.id,
            name=post['name'], email=post['email'], password=post['password']
        )
        data['language']=post['language']
        data['state']=post['farmer_state']
        data['district']=post['farmer_district']
        data['land_area']=post['land_area']
        data['contact']=post['farmer_contact']
        form = forms.FarmerRegistrationForm(data)
        if form.is_valid():
            farmer=form.save()
            CommunityFarmer.objects.create(community=Community.objects.first(),farmer=farmer)
            return redirect('homepage')
        else:
            messages.warning(request,"Form not filled properly")
            print(form.errors)
    return render(request,template_name)

def user_logout(request):
    logout(request)
    return redirect('homepage')


