from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list),
    path('write/',views.post_write),

    path('post/<int:post_id>',views.post_detail)
    # path('post/<int:post_id>/edit',view.post_upddate)
    # path('post/<int:post_id>/delete',view.post_delete)
]
