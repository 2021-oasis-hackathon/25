from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# Register your models here.
admin.site.register(User, UserAdmin)
#custom field 섹션 아래 nickname field 추가
UserAdmin.fieldsets += (('Custom fields', {'fields': ('nickname',)}),)