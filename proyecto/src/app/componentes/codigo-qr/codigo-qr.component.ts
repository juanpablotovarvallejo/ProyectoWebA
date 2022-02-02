import { Component, Input, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { HistorialCompraInterface } from 'src/app/services/interfaces/historial-compra.interface';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQrComponent implements OnInit {

  constructor() { }
  @Input()
  data: HistorialCompraInterface = {
    brand: "Prueba",
    year: 2012,
    color: "String",
    vin: "String"
  };

  ngOnInit(): void {
  }
  title = 'app';
  elementType = NgxQrcodeElementTypes.URL;
  value = this.data.brand;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
}
