from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from chat import models
from core.models import Expert, Farmer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

def chat_interface(request):
    return render(request, 'chat/interface.htm')


@csrf_exempt
@login_required
def new_expert_chat(request, expert_id):
    if request.method == 'POST':
        chat = models.Chat.objects.create(name='Expert Chat')
        models.ExpertChat.objects.create(chat=chat, expert_id=expert_id, farmer=request.user.farmer)
        return JsonResponse({
            'chat': chat.id
        })
        # client, _ = models.Client.objects.get_or_create(user=request.user)
    return JsonResponse({}, status=400)


@csrf_exempt
@login_required
def new_farmer_chat(request, farmer_id):
    if request.method == 'POST':
        farmer = Farmer.objects.get(id=farmer_id)
        qs = models.FarmerChat.objects.find_for_user(request.user).find_for_user(farmer.user)
        chat = None
        if qs:
            chat = qs[0].chat
            # return JsonResponse({
            #     'detail': "Chat already exists.",
            #     'chat': qs[0].chat.id
            # })
        else:
            chat = models.Chat.objects.create(name=f'{farmer.name}')
            models.FarmerChat.objects.create(chat=chat, farmer1_id=farmer_id, farmer2=request.user.farmer)
        msg = request.POST.get('message', None)
        if msg:
            models.Message.objects.create(chat=chat, sender=request.user, content=msg)
        return JsonResponse({
            'chat': chat.id
        })
    return JsonResponse({}, status=400)
