from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework import status
from .models import CustomUser
from .serializers import StudentRegistrationSerializer, MyTokenObtainPairSerializer ,AdminRegistrationSerializer

from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



@api_view(['GET'])
def index(request):
    return Response({"success":"The setup was successfull"})


class StudentRegistrationView(APIView):
        def post(self, request):
            print("request hit")
            # name = request.data.get('name')
            # print(name)
            # print("Name:", name)
            serializer = StudentRegistrationSerializer(data=request.data)
            print(serializer)
            if serializer.is_valid():
                print("valid")
                data = serializer.validated_data
                # Check if the email already exists
                if CustomUser.objects.filter(email=data['email']).exists():
                    return Response({'message': 'Email address is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
                
                # Create a new CustomUser (student)
                user = CustomUser.objects.create_user(
                    username=data['name'],
                    email=data['email'],
                    password=data['password'],
                    role=data['role'],
                    phone_number=data['phone_number']
                )
                user.save()
                # Create a corresponding StudentProfile
                # student_profile = StudentProfile(
                #     full_name=data['username'],
                #     student=user
                # )
                # student_profile.save()
                return Response({'message': 'Student registered successfully'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    


# class UserLoginView(APIView):
#     def post(self, request):
#         print("request hit")
#         serializer = UserLoginSerializer(data=request.data)
#         if serializer.is_valid():
#             print("serializer valid")
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']

#             user = authenticate(request, email=email, password=password)

#             if user:
#                 refresh = RefreshToken.for_user(user)
#                 return Response({
#                     'refresh': str(refresh),
#                     'access': str(refresh.access_token),
#                 })
#             else:
#                 return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class MyTokenPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer
    print(serializer_class)
    
    
    

class AdminRegistrationView(APIView):
        def post(self, request):
            print("request hit")
            # name = request.data.get('name')
            # print(name)
            # print("Name:", name)
            serializer = AdminRegistrationSerializer(data=request.data)
            print(serializer)
            if serializer.is_valid():
                print("valid")
                data = serializer.validated_data
                # Check if the email already exists
                if CustomUser.objects.filter(email=data['email']).exists():
                    return Response({'message': 'Email address is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
                
                # Create a new CustomUser (student)
                user = CustomUser.objects.create_user(
                    username=data['name'],
                    email=data['email'],
                    password=data['password'],
                    role=data['role'],
                    phone_number=data['phone_number']
                )
                user.save()
                # Create a corresponding StudentProfile
                # student_profile = StudentProfile(
                #     full_name=data['username'],
                #     student=user
                # )
                # student_profile.save()
                return Response({'message': 'Admin registered successfully'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    
    

    
class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        print("request hit")
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'User successfully logged out'}, status=status.HTTP_200_OK)
        except Exception:
            return Response({'message': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        