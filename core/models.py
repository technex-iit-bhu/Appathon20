from django.db import models
from django.contrib.auth.models import User
from django.utils.functional import cached_property
from core import EQUIPMENT_TYPE_CHOICES,EQUIPMENT_TYPE_MAPS
from farmconnect.validators import phone_regex


def crop_image_save_loc(instance, filename):
    return f'images/crops/{filename}_{instance.name}.png'

def equipment_image_save_loc(instance, filename):
    return f'images/equipments/{filename}_{instance.name}.png'


class Farmer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=96)
    language = models.CharField(max_length=10, default='en')
    state = models.CharField(max_length=32)
    district = models.CharField(max_length=32)
    joined = models.DateTimeField(auto_now_add=True)
    level = models.IntegerField(default=0)
    land_area = models.IntegerField('in hectares', default=0)
    contact = models.CharField(validators=[phone_regex],max_length=15, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'

    @cached_property
    def label_level(self):
        if self.level == 0:
            return 'Newbie'
        elif self.level == 1:
            return 'Helpful'
        elif self.level == 2:
            return 'Very Helpful'
        else:
            return 'Supportive'


class Crop(models.Model):
    name = models.CharField(max_length=32)
    photo = models.ImageField(upload_to=crop_image_save_loc, null=True, blank=True)
    description = models.TextField(default='')

    def __str__(self):
        return self.name


class FarmerCropYield(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE, related_name='crops', related_query_name='crop')
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE, related_name='yields', related_query_name='yield')
    yield_potential = models.IntegerField(help_text='in kg', default=0)
    yield_effective = models.IntegerField(help_text='in kg')
    yield_wastage = models.IntegerField(help_text='in kg', default=0)
    cultivated_area = models.IntegerField(help_text='in hectares')
    pesticides_used = models.IntegerField(help_text='in kg', default=0)
    investment = models.IntegerField(help_text='in Rs.')
    profit = models.IntegerField(help_text='in Rs.')
    timestamp = models.DateTimeField(auto_now_add=True)


class Equipment(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    name = models.CharField(max_length=32)
    photo = models.ImageField(upload_to=equipment_image_save_loc, null=True, blank=True)
    rental_price = models.IntegerField(help_text='in Rs.', default=0)
    rental_days = models.IntegerField(default=0)
    start_dt = models.DateTimeField()
    end_dt = models.DateTimeField(null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    category = models.PositiveSmallIntegerField(choices=EQUIPMENT_TYPE_CHOICES)
    description = models.TextField(null=True, blank=True)
    @cached_property
    def label_category(self):
        return EQUIPMENT_TYPE_MAPS[self.category]
        


class Expert(models.Model):
    JOB_STUDENT = 'student'
    JOB_GOVT_OFFICIAL = 'govt'
    JOB_CHOICES = (
        (JOB_STUDENT, 'Student'),
        (JOB_GOVT_OFFICIAL, 'Government')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=32)
    phone = models.CharField(
        validators=[phone_regex], max_length=17,
        blank=True, null=True
    )
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    job = models.CharField(max_length=7, choices=JOB_CHOICES)
    # rating