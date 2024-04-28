from django.shortcuts import render
from django.http import HttpResponse
from propelauth_django_rest_framework import init_auth
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

auth = init_auth('https://566408065.propelauthtest.com',
                 '4a511f100ea49646123ad9fb90e3c701c3f558026bd947a375220f0e821577ae0743209cdc18714424bd10b44a6b4aca')
''' @api_view(['GET'])'''
@permission_classes([auth.IsUserAuthenticated])

def index(request):
    return render(request, 'index.html')