# Generated by Django 2.2.4 on 2019-08-24 15:04

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20190824_1422'),
    ]

    operations = [
        migrations.AddField(
            model_name='equipment',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
