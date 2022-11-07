from django.db import models

# Create your models here.
class About(models.Model):
    name = models.CharField(max_length=200)
    role = models.TextField(max_length=100, blank=True)
    imgURL = models.SlugField(max_length=200)
    bio = models.TextField(max_length=300, blank=True, null=True)
    twitter = models.SlugField(max_length=200)
    linkedin = models.SlugField(max_length=200)
    youtube = models.SlugField(max_length=200)
    github = models.SlugField(max_length=200)
    
    def __str__(self):
        return self.name