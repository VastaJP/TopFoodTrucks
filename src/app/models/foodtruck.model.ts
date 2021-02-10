import { Imagen } from './imagen.model';

export interface Foodtruck {

  idFoodTruck: number;
  whatsapp: number;
  nombre: string;
  servicio: string;
  descripcion: string;
  website: string;
  instagram: string;
  twitter: string;
  imagen: Imagen;

}
