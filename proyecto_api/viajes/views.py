from .models import Viaje
from rest_framework import viewsets
from .serializer import ViajeSerializer

class ViajesViewSet(viewsets.ModelViewSet):
    serializer_class =  ViajeSerializer
    queryset = Viaje.objects.all()