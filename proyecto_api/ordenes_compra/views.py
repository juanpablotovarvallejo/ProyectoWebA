from .models import Orden_Compra
from rest_framework import viewsets
from .serializer import OrdenesCompraSerializer

class OrdenesCompraViewSet(viewsets.ModelViewSet):
    serializer_class =  OrdenesCompraSerializer
    queryset = Orden_Compra.objects.all()

