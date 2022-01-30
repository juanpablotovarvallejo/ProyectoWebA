import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'app';
  elementType = NgxQrcodeElementTypes.URL;
  value = 'https://www.google.com';
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
}
