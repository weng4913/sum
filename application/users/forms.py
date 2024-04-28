from django.contrib.auth.forms import UserCreationForm

class RegisterUserForm(UserCreationForm):
    class Meta:
        fields = UserCreationForm.Meta.fields + ('email',)