from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.urls import reverse
from django.views.generic import CreateView
from users.forms import RegisterUserForm

# Create your views here.

def dashboard(request):
    return render(request, 'dashboard.html')

class RegisterUserView(CreateView):
    form_class = RegisterUserForm

    def get(self, request, *args, **kwargs):
        return render(request, 'users/register.html')
    
    def post(self, request, *args, **kwargs):
        form = RegisterUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse('dashboard'))