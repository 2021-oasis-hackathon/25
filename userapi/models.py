from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_no_special_characters


# Create your models here.
class User(AbstractUser):

    nickname = models.CharField(
        max_length=15,
        unique=True,
        null=True,
        validators=[validate_no_special_characters],
        error_messages={'unique':'이미 사용중인 닉네임 입니다.'},
        )
    
    def __str__(self):
        return self.email



class Location(models.Model):
    #커뮤니티 모델 장소 이름/설명/인구 데이터 저장
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)

# 장소 이름 설명 인구 모델링 필드 작성. 장고에 반영

    #장소 반환 함수 
    def __str__(self):
        return self.name


class Post(models.Model): # 위치 / 제목 / 내용 / 이미지 / 작성 날짜 / 수정 날짜
    title = models.CharField(max_length=30)
    content = models.TextField()
    POST_CATEGORY = [('맛집', '맛집'),
                     ('계획','계획'),
                     ('리뷰','리뷰'),
                     ('구함','구함')]
    category = models.CharField(max_length=10,choices=POST_CATEGORY)
    image1 = models.ImageField(upload_to='post_pics', blank=True)
    dt_created = models.DateTimeField(auto_now_add=True)
    dt_updated = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
