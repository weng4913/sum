from django.shortcuts import render
from django.http import HttpResponse
from propelauth_py import init_base_auth, UnauthorizedException
from propelauth_django_rest_framework import init_auth
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

auth = init_base_auth('https://566408065.propelauthtest.com',
                      '4a511f100ea49646123ad9fb90e3c701c3f558026bd947a375220f0e821577ae0743209cdc18714424bd10b44a6b4aca')

def index(request):
    return render(request, 'index.html')

def profile(request):
    user_id = ''
    user_info = auth.fetch_user_metadata_by_user_id(user_id)
    try:
        profile_photo = user_info['picture_url']
        profile_name = user_info['first_name'] + ' ' + user_info['last_name']
        profile_email = user_info['email']
    except:
        profile_photo = ''
        profile_name = ''
        profile_email = ''
    
    context={
        'profile_photo': profile_photo,
        'profile_name': profile_name,
        'profile_email': profile_email
    }
    return render(request, 'profile.html', context=context)

def donate(request):
    return render(request, 'donate.html')

def whoami(request):
    auth_header = request.headers.get('authorized')
    try:
        user = auth.validate_access_token_and_get_user(auth_header)
        return HttpResponse('Logged in as', user.user_id)
    except UnauthorizedException:
        return HttpResponse('Invalid access token')
    