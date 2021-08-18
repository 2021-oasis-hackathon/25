from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User,Post,Location


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Post)
admin.site.register(Location)
#custom field 섹션 아래 nickname field 추가
UserAdmin.fieldsets += (('Custom fields', {'fields': ('nickname',)}),)