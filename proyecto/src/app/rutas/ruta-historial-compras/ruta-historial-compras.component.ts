import { Component, OnInit } from '@angular/core';
import { HistorialCompraService } from 'src/app/services/http/historial-compras.service';
import { HistorialCompraInterface } from 'src/app/services/interfaces/historial-compra.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalCodigoQrComponent } from 'src/app/componentes/modal-codigo-qr/modal-codigo-qr.component';
import { OrdenCompraInterface } from 'src/app/services/interfaces/orden-compra.interface';

@Component({
  selector: 'app-ruta-historial-compras',
  templateUrl: './ruta-historial-compras.component.html',
  styleUrls: ['./ruta-historial-compras.component.css']
})
export class RutaHistorialComprasComponent implements OnInit {

  historial: OrdenCompraInterface[] = [];
  cols: any[] = [];
  loading: boolean = true;


  constructor(private historialService: HistorialCompraService,
    private readonly dialog: MatDialog) { }

  ngOnInit() {
    const historialData$ = this.historialService.mostrarOrdenesCompra()
    historialData$.subscribe(
      (data: OrdenCompraInterface[]) => {
        this.historial = data
        this.loading = false;
        console.log(this.groupBy(this.historial, 'viaje'));
      }
    );

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'cantidad_boletos', header: 'Cantidad Boletos' },
      { field: 'fecha_compra', header: 'Fecha' },
    ];

    
  }

  abrirModal(a: HistorialCompraInterface) {
    const referenciaDialogo = this.dialog.open(
      ModalCodigoQrComponent,
      {
        data: a
      });

    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$.subscribe(
      (data) => {
        console.log({ data });
      }
    );
  }
  groupBy(xs: any[], key: string) {
    return xs.reduce(function (rv, x) {
      console.log(x);
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

}
