from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from community import models, forms


def get_popular_tags():
    qs = models.CommunityQuestion.objects.all().order_by('-upvotes')
    tags = list()
    for ques in qs[:5]:
        tags.extend(ques.tags)
    return tags


@login_required
def community_home(request):
    farmer = request.user.farmer
    cf = farmer.community
    community = cf.community
    question_qs = models.CommunityQuestion.objects.filter(farmer__community__community=community)
    member_qs = models.CommunityFarmer.objects.filter(community=community)
    ctx = {
        'questions': question_qs,
        'members': member_qs,
        'tags': get_popular_tags()
    }
    if 'tag' in request.GET:
        ctx['questions'] = question_qs.filter(raw_tags__icontains=request.GET['tag'])
    return render(request, 'question_list.html', context=ctx)


@login_required
def question_detail(request, ques_id):
    if request.method == 'POST':
        data = dict(question=ques_id, farmer=request.user.farmer.id, content=request.POST.get('content', None))
        f = forms.AnswerForm(data)
        if f.is_valid():
            f.save()
        else:
            print(f.errors)
    ques = models.CommunityQuestion.objects.get(id=ques_id)
    l_ans = ques.answers.all()
    ctx = {
        'ques': ques,
        'answers': l_ans,
        'tags': get_popular_tags()
    }
    return render(request, 'community_question.html', context=ctx)

@login_required
def question_new(request):
    if request.method == 'POST':
        farmer = request.user.farmer
        data = dict(
            farmer=farmer.id, community=farmer.community.id, title=request.POST.get('title', None),
            content=request.POST.get('content', None), raw_tags=request.POST.get('raw_tags', None)
        )
        f = forms.QuestionForm(data)
        if f.is_valid():
            q = f.save()
            return redirect('question-detail', ques_id=q.id)
        else:
            print(f.errors)
    
    ctx = {
        'top_questions': models.CommunityQuestion.objects.order_by('-upvotes', '-asked')[:5]
    }
    return render(request, 'question_upload.html', context=ctx)
