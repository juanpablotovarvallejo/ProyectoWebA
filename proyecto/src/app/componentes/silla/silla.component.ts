import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-silla',
  templateUrl: './silla.component.html',
  styleUrls: ['./silla.component.css']
})
export class SillaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  asiento = { "id": 1, "estado": "libre" }
  @Input()
  disabled = false;

  libre = {
    "background": "#059DFF",
    "border": "#126AA3",
    "color": "white"
  }

  seleccionado = {
    "background": "#FFEC00",
    "border": "#FFD500",
    "color": "white"
  }

  ocupado = {
    "background": "#FF3232",
    "border": "#FF0000",
    "color": "white"
  }

  colores = {


  }

  getColor() {
    if (this.asiento.estado == "ocupado") {
      return this.ocupado;
    } else if (this.asiento.estado == "seleccionado") {
      return this.seleccionado;
    }
    else {
      return this.libre;
    }
  }

  cambiarEstado() {
    if (!this.disabled) {
      if (this.asiento.estado === "libre") {
        this.asiento.estado = 'seleccionado';
      } else if (this.asiento.estado === 'seleccionado') {
        this.asiento.estado = 'libre';
      } else {

      }
    }
  }

  obtenerEtiqueta() {
    if (this.asiento.id < 10) {
      return "0" + this.asiento.id;
    } else {
      return this.asiento.id;
    }
  }

}
