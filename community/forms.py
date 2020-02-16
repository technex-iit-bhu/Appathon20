from django import forms
from community import models

class AnswerForm(forms.ModelForm):
    class Meta:
        model = models.CommunityAnswer
        fields = ("content", 'question', 'farmer')


class QuestionForm(forms.ModelForm):
    class Meta:
        model = models.CommunityQuestion
        fields = ("title", "content", "farmer", "community", "raw_tags")
