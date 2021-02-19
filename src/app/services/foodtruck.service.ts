import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../components/seguridad/login.service';
import { Foodtruck } from '../models/foodtruck.model';

@Injectable({
  providedIn: 'root',
})
export class FoodtruckService {
  baseUrl = environment.baseUrl;

  foodtruck!: Foodtruck;
  foodtruckSubject = new Subject<Foodtruck>();

    // private httpOptions = {
    //     headers: new HttpHeaders({
    //       idUsuario:  '1',
    //       token: '1123456'
    //     })
    //   };

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      };

    constructor(private http: HttpClient, private router: Router, private loginService: LoginService){}

    public obtenerFoodtruck( id: string ): Observable<Foodtruck>{
        return this.http.get<Foodtruck>('http://localhost:8080/ttps-spring/foodtruck/' + id, this.httpOptions);
    }

    registrarFoodtruck(ft: Foodtruck): Observable<Foodtruck>{
        // let usuario = localStorage.getItem('currentUser');
        const usuario = this.loginService.getUserLoggedIn();
        console.log(usuario);
        const idUsuario = usuario.idUsuario;
        return this.http.post<Foodtruck>(this.baseUrl + '/Foodtruck/' + idUsuario, ft, this.httpOptions);
        // tslint:disable-next-line: deprecation
    //     .subscribe( (response: Foodtruck) => {
    //         this.foodtruck = {
    //             idFoodTruck: response.idFoodTruck,
    //             nombre: response.nombre,
    //             descripcion: response.descripcion,
    //             servicio: response.servicio,
    //             whatsapp: response.whatsapp,
    //             website: response.website,
    //             instagram: response.instagram,
    //             twitter: response.twitter,
    //             imagenes: response.imagenes,
    //         };
    //         console.log(this.foodtruck);
    //         this.foodtruckSubject.next(this.foodtruck);
    //         // this.router.navigate(['/foodtruck/' + this.foodtruck.idFoodTruck]);
    //         this.router.navigate(['/home']);
    // });
    }

    borrarFoodtruck( id: string): Observable<any>{
        return this.http.delete(this.baseUrl + '/Foodtruck/' + id, this.httpOptions);
    }

  obtenerActualListener(): Observable<Foodtruck> {
    return this.foodtruckSubject.asObservable();
  }
}
