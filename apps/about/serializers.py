from .models import *
from rest_framework import serializers

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = [
            'name',
            'role',
            'imgURL',
            'bio',
            'twitter',
            'linkedin',
            'youtube',
            'github',            
        ]