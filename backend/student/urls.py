from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView
)


urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('',views.index,name='index'),
    path('register/student/',views.StudentRegistrationView.as_view(),name='student-registration'),
    path('register/admin/',views.AdminRegistrationView.as_view(),name='admin-registration'),
    path('login/', views.MyTokenPairView.as_view(), name='login'),
    path('logout/', views.UserLogoutView.as_view(), name='user-logout'),
]
