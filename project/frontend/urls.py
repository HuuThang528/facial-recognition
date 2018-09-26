from django.urls import path
from . import views

urlpatterns = [
    path('aaa', views.index ),
    path('show', views.show )
]