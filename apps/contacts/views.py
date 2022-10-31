from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import requests
activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY


class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        
        try:
            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message failed to be sent'})
