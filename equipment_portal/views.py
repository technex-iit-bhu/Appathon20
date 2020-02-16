from core.models import *
from django.utils.timezone import now
from django.shortcuts import get_object_or_404,redirect,render
from core import EQUIPMENT_TYPE_CHOICES,EQUIPMENT_TYPE_MAPS
from .forms import EquipmentUploadForm
from django.contrib import messages
# Create your views here.

def equipments_list(request):
    equipments = Equipment.objects.filter(end_dt__gte = now() ).order_by('-timestamp')
    context = {
        'equipments':equipments,
    }
    return render(request, 'equipment_list.html', context=context)

def equipment_new(request):
    context={
        'categories':EQUIPMENT_TYPE_CHOICES,
    }
    if request.method == "POST":
        post_data = request.POST
        data=dict(farmer=request.user.farmer.id, name=post_data['name'], rental_price=int(post_data['rental_price']),
            start_dt=post_data['start_date'], end_dt=post_data['end_date'],category=int(post_data['category']),
            description=post_data['description']
        )
        form = EquipmentUploadForm(data)
        if form.is_valid():
            form.save()
            return redirect('equipments-list')
        else:
            print(form.errors)
            messages.warning(request,"Form was not valid")
    return render(request, 'equipment_upload.html', context=context)

def equipment_detail(request, pk):
    template_name = 'equipment_detail.html'
    context={
        'equipment':get_object_or_404(Equipment,pk=pk),
    }
    return render(request, template_name, context=context)