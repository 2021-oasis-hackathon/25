from django.urls import path
from . import views


urlpatterns = [
    path('',views.index, name='index'),
    path('community/<int:location>/',views.post_list, name='community'),
]
