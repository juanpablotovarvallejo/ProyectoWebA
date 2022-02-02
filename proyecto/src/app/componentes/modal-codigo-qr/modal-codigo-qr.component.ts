import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistorialCompraInterface } from 'src/app/services/interfaces/historial-compra.interface';

@Component({
  selector: 'app-modal-codigo-qr',
  templateUrl: './modal-codigo-qr.component.html',
  styleUrls: ['./modal-codigo-qr.component.css']
})
export class ModalCodigoQrComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: HistorialCompraInterface,) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
