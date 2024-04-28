from django.urls import path, include
from . import views

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('register/', views.RegisterUserView.as_view(), name='register')
]