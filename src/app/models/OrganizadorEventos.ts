import { Injectable } from "@angular/core";
import { Evento } from "./Evento";

@Injectable()
export class OrganizadorEventos {

    public idUsuario: number;
    public email: string;
    public contrasenia: string;
    public nombre: string;
    public apellido: string;
    public eventos: Evento[];

    constructor(idUsuario: number, email: string, contrasenia: string, nombre: string, apellido: string, eventos: Evento[]){
        this.idUsuario = idUsuario;
        this.email = email;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellido = apellido;
        this.eventos = eventos;
    }

}
