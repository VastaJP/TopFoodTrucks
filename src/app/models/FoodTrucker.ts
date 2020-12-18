import { Injectable } from "@angular/core";
import { FoodTruck } from "./FoodTruck";

@Injectable()
export class FoodTrucker {

    public idUsuario: number;
    public email: string;
    public contrasenia: string;
    public nombre: string;
    public apellido: string;
    public foodTruck: FoodTruck;

    constructor(idUsuario: number, email: string, contrasenia: string, nombre: string, apellido: string, foodTruck: FoodTruck){
        this.idUsuario = idUsuario;
        this.email = email;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foodTruck = foodTruck;
    }
}
