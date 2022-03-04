import { Component, Input, OnInit } from '@angular/core';
import { ViajeInterface } from 'src/app/services/interfaces/viaje.interface';

@Component({
  selector: 'app-tarjeta-viaje',
  templateUrl: './tarjeta-viaje.component.html',
  styleUrls: ['./tarjeta-viaje.component.css']
})
export class TarjetaViajeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  viaje!: ViajeInterface;

}
