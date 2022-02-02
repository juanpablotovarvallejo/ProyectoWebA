import { Component, OnInit } from '@angular/core';
import { HistorialCompraService } from 'src/app/services/http/historial-compras.service';
import { HistorialCompraInterface } from 'src/app/services/interfaces/historial-compra.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalCodigoQrComponent } from 'src/app/componentes/modal-codigo-qr/modal-codigo-qr.component';

@Component({
  selector: 'app-ruta-historial-compras',
  templateUrl: './ruta-historial-compras.component.html',
  styleUrls: ['./ruta-historial-compras.component.css']
})
export class RutaHistorialComprasComponent implements OnInit {

  historial: HistorialCompraInterface[] = [];
  cols: any[] = [];
  loading: boolean = true;


  constructor(private historialService: HistorialCompraService,
    private readonly dialog: MatDialog) { }

  ngOnInit() {
    const historialData$ = this.historialService.getCarsSmall()


    historialData$.subscribe(
      (data: HistorialCompraInterface[]) => {
        this.historial = data
        this.loading = false;
      }
    );

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Peterca' }
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

  
}
