from django.urls import path
from . import views
from .views import UserLoginView

urlpatterns = [
    path('',views.index,name='index'),
    path('register/student/',views.StudentRegistrationView.as_view(),name='student-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
]
