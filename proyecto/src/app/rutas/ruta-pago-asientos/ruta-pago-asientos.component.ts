import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-pago-asientos',
  templateUrl: './ruta-pago-asientos.component.html',
  styleUrls: ['./ruta-pago-asientos.component.css']
})
export class RutaPagoAsientosComponent implements OnInit {

  constructor() {
    console.log(this.calcularFilas());
    this.longitud = Array(this.calcularFilas()).fill(0);
    this.viaje.asientos.splice(0, this.viaje.asientos.length);
    for (let i = 0; i < this.viaje.totalAsientos; i++) {
      if (i == 2 || i == 3) {
        this.viaje.asientos.push(
          { "id": i + 1, "estado": "seleccionado" },
        )
      } else {
        this.viaje.asientos.push(
          { "id": i + 1, "estado": "libre" },
        )
      }
    }
  }

  seleccionados = 2;

  ngOnInit(): void {
  }
  columnas = 4;

  calcularFilas() {
    return Math.ceil(this.viaje.totalAsientos / this.columnas);
  }

  longitud = Array(10).fill(0);

  viaje = {
    "id": "1",
    "origen": "Aeropuerto Internacional de El Salvador",
    "destino": "Aeropuerto Internacional de El Salvador",
    "fecha": "2020-06-01T00:00:00.000Z",
    "hora": "2020-06-01T00:00:00.000Z",
    "precio": "100",
    "totalAsientos": 36,
    "asientos": [
      { "id": 1, "estado": "libre" },
      { "id": 2, "estado": "libre" },
      { "id": 3, "estado": "seleccionado" },
      { "id": 4, "estado": "seleccionado" },
      { "id": 5, "estado": "libre" },
      { "id": 6, "estado": "libre" },
      { "id": 7, "estado": "ocupado" },
      { "id": 8, "estado": "libre" },
      { "id": 9, "estado": "libre" },
      { "id": 10, "estado": "libre" },
      { "id": 11, "estado": "libre" },
      { "id": 12, "estado": "libre" },
      { "id": 13, "estado": "libre" },
      { "id": 14, "estado": "libre" },
      { "id": 15, "estado": "libre" },
      { "id": 16, "estado": "libre" },
      { "id": 17, "estado": "ocupado" },
      { "id": 18, "estado": "libre" },
      { "id": 19, "estado": "libre" },
      { "id": 20, "estado": "libre" },
    ]
  }


}
