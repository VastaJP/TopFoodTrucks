import { Evento } from './evento.model';
import { Foodtruck } from './foodtruck.model';
import { Valoracion } from './valoracion.model';

export interface Reserva{
  idReserva: string;
  estado: string;
  evento: Evento;
  foodTruck: Foodtruck;
  valoracion: Valoracion;
}
