from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms import PostForm
#from django.http import Http404

# Create your views here.
def post_list(request):

    context = dict()
    # 모델에서 모든 포스트 가져오기
    post = Post.objects.order_by('-dt_created')

    context['post'] = post

    return render(request, 'posts/index.html',context=context)

def post_detail(request, post_id):

    context = dict()
    post = get_object_or_404(Post,pk=post_id)

    context['post'] = post

    return render(request, 'posts/post_detail.html',context=context)


def post_write(request):
    context = dict()
    if request.method == 'POST':
        form = PostForm(request.POST)

        if form.is_valid():
            post = form.save(commit=False)
            post.save()

            return redirect('../')
    else:
        form = PostForm()

    context['form'] = form
    return render(request, 'posts/post_write.html', context)


