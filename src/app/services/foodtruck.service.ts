import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foodtruck } from '../models/foodtruck.model';

@Injectable({
    providedIn: 'root',
})
export class FoodtruckService {
    baseUrl = environment.baseUrl;

    foodtruck!: Foodtruck;
    foodtruckSubject = new Subject<Foodtruck>();

    private httpOptions = {
        headers: new HttpHeaders({
          idUsuario:  '1',
          token: '1123456'
        })
      };

    constructor(private http: HttpClient, private router: Router){}

    registrarFoodtruck(ft: Foodtruck): void{
        this.http.post<Foodtruck>(this.baseUrl + '/Foodtruck', ft)
        // tslint:disable-next-line: deprecation
        .subscribe( (response: Foodtruck) => {
            this.foodtruck = {
                idFoodTruck: response.idFoodTruck,
                nombre: response.nombre,
                descripcion: response.descripcion,
                servicio: response.servicio,
                whatsapp: response.whatsapp,
                website: response.website,
                instagram: response.instagram,
                twitter: response.twitter,
                imagenes: response.imagenes,
            };
            console.log(this.foodtruck);
            this.foodtruckSubject.next(this.foodtruck);
            // this.router.navigate(['/foodtruck/' + this.foodtruck.idFoodTruck]);
            this.router.navigate(['/home']);
    });
    }

    obtenerFoodtruck( id: string ): void{
        this.http.get<Foodtruck>(this.baseUrl + '/Foodtruck/' + id, this.httpOptions)
        // tslint:disable-next-line: deprecation
        .subscribe( (response: Foodtruck) => {
            this.foodtruck = {
                idFoodTruck: response.idFoodTruck,
                nombre: response.nombre,
                descripcion: response.descripcion,
                servicio: response.servicio,
                whatsapp: response.whatsapp,
                website: response.website,
                instagram: response.instagram,
                twitter: response.twitter,
                imagenes: response.imagenes,
            };
            this.foodtruckSubject.next(this.foodtruck);
        } );
    }

    obtenerActualListener(): Observable<Foodtruck>{
        return this.foodtruckSubject.asObservable();
    }

}
