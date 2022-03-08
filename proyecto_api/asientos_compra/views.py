from .models import Asiento_Compra
from rest_framework import viewsets
from .serializer import AsientoCompraSerializer

class AsientosCompraViewSet(viewsets.ModelViewSet):
    serializer_class =  AsientoCompraSerializer
    queryset = Asiento_Compra.objects.all()

    def get_queryset(self):
        queryset = Asiento_Compra.objects.all()
        compra = self.request.query_params.get('idCompra')
        if compra is not None:
            queryset = Asiento_Compra.objects.filter(orden_compra_id=compra)
        return queryset
# Create your views here.
