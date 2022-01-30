from .models import Asiento_Compra
from rest_framework import viewsets
from .serializer import AsientoCompraSerializer

class AsientosCompraViewSet(viewsets.ModelViewSet):
    serializer_class =  AsientoCompraSerializer
    queryset = Asiento_Compra.objects.all()
# Create your views here.
