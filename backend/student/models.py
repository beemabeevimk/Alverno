from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser, BaseUserManager

class AccountManager(BaseUserManager):  # custom manager
    def create_user(self, username, email, password=None, role='student',  phone_number=None ):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        email = email.lower()
        
        if not username:
            username = email.split('@')[0]

        user = self.model(
            username=username,
            email=email,
            phone_number=phone_number, 
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username,email, password=None , **extra_fields):
        extra_fields.setdefault('role', 'admin')
        # extra_fields.setdefault('phone_number', None)
        user = self.create_user(username, email, password=password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)   
        return user
    

class Role(models.TextChoices):
    STUDENT = 'student', 'Student'
    STAFF = 'staff', 'Staff'
    ADMIN = 'admin', 'Admin'    

    
class CustomUser(AbstractUser):
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    
    role = models.CharField(max_length=20, choices=Role.choices)  #  'student', 'staff', 'admin'
    # role = models.CharField(max_length=20, default=Role.STUDENT)
    phone_number = models.CharField(max_length=15,default='')

    def __str__(self):
        return self.username
    
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    
    objects = AccountManager()

    
class StudentProfile(models.Model):
    nationality = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=5)
    student = models.ForeignKey('CustomUser', on_delete=models.CASCADE) 
    address_lane = models.CharField(max_length=100,default='')
    pincode = models.CharField(max_length=10, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

    def __str__(self):
        return self.nationality


