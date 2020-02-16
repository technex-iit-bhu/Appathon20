from django.db import models
from django.utils.functional import cached_property


class Community(models.Model):
    name = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    district = models.CharField(max_length=32)
    location_lat = models.FloatField(default=0)
    location_lon = models.FloatField(default=0)

    class Meta:
        verbose_name_plural = 'Communities'

    def __str__(self):
        return f'{self.name}'


class CommunityFarmer(models.Model):
    farmer = models.OneToOneField('core.Farmer', on_delete=models.CASCADE, related_name='community')
    community = models.ForeignKey(Community, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.community} - {self.farmer}'


class CommunityQuestion(models.Model):
    farmer = models.ForeignKey('core.Farmer', on_delete=models.CASCADE, related_name='questions')
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    raw_tags = models.TextField(default='')
    crop = models.ForeignKey('core.Crop', null=True, blank=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=200)
    content = models.TextField()
    asked = models.DateTimeField(auto_now_add=True)
    upvotes = models.IntegerField(default=0)

    @cached_property
    def tags(self):
        return self.raw_tags.split(',')

    def __str__(self):
        return f'{self.title}'


class CommunityAnswer(models.Model):
    farmer = models.ForeignKey('core.Farmer', on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(CommunityQuestion, on_delete=models.CASCADE, related_name='answers')
    upvotes = models.IntegerField(default=0)
    content = models.TextField()
    is_correct = models.BooleanField(default=False)
    answered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.question} - {self.farmer}'
