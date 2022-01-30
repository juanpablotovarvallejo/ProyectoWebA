from .models import Usuario
from rest_framework import viewsets
from .serializer import UsuarioSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    serializer_class =  UsuarioSerializer
    queryset = Usuario.objects.all()
