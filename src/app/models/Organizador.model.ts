import { Evento } from './evento.model';

export interface OrganizadorEventos {
  idUsuario: string;
  email: string;
  contrasenia: string;
  nombre: string;
  apellido: string;
  eventos: Evento[];
}
