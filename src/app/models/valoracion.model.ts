import { Reserva } from "./reserva.model";

export interface Valoracion{
  idValoracion: string;
  limpieza: number;
  simpatia: number;
  calidadPrecio: number;
  sabor: number;
  disenio: number;
  reserva: Reserva;
}
