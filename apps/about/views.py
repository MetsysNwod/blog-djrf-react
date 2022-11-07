from django.shortcuts import render, get_object_or_404
from .models import About
from .serializers import AboutSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
# Create your views here.

class AboutDetailView(APIView):
    def get(self, request,format=None):
        about = get_object_or_404(About)
        serializer = AboutSerializer(about)
        return Response({'about':serializer.data}, status=status.HTTP_200_OK)