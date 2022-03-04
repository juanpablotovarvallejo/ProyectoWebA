import { CooperativaInterface } from "./cooperativa.interface";

export interface ViajeInterface {
    id: number;
    ciudad_destino: string;
    ciudad_origen: string;
    fecha: Date;
    hora: string;
    total_asientos: number;
    precio: number;
    coperativa: CooperativaInterface;
}