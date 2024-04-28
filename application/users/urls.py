from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('profile', views.profile, name='profile'),
    path('donate', views.donate, name='donate'),
    path('whoami', views.whoami, name='whoami')
]