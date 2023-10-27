from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework import status
from .models import CustomUser
from .serializers import StudentRegistrationSerializer

from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

@api_view(['GET'])
def index(request):
    return Response({"success":"The setup was successfull"})



class StudentRegistrationView(APIView):
    def post(self, request):
        serializer = StudentRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            # Check if the email already exists
            if CustomUser.objects.filter(email=data['email']).exists():
                return Response({'message': 'Email address is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Create a new CustomUser (student)
            user = CustomUser.objects.create_user(
                username=data['username'],
                email=data['email'],
                password=data['password'],
                role=data['role'],
                phone_number=data['phone_number']
            )
            # Create a corresponding StudentProfile
            # student_profile = StudentProfile(
            #     full_name=data['username'],
            #     student=user
            # )
            # student_profile.save()
            return Response({'message': 'Student registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
