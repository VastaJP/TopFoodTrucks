import { Foodtruck } from './foodtruck.model';

export interface Foodtrucker{

  idUsuario: string;
  email: string;
  contrasenia: string;
  nombre: string;
  apellido: string;
  foodtruck: Foodtruck;

}
