import { Reserva } from './reserva.model';

export interface Evento{
  idEvento: string;
  nombreEvento: string;
  direccion: string;
  provincia: string;
  pagaAsistente: number;
  geolocalizacion: string;
  tipoEvento: string;
  email: string;
  descripcion: string;
  fechaYHora: Date;
  codigoPostal: number;
  telefono: string;
  reservas: Reserva[];
}
