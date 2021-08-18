from django.shortcuts import render
#from django.views.generic import ListView, DetailView
from .models import Post,Location

# Create your views here.
def index(request):
    # print(request.user.is_authenticated)
    return render(request, 'userapi/index.html')


def post_list(request, location):

    context = dict()

    context['location'] = Location.objects.get(id=location)
    context['postlist'] = Post.objects.filter(location=location).order_by('-dt_created')
    
        
    return render(request, 'userapi/community.html',context=context)

    
    