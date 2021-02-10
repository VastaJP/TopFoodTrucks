import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foodtrucker } from '../models/foodtrucker.model';

@Injectable({
  providedIn: 'root',
})
export class FoodtruckerService {

  baseurl = environment.baseUrl;

  private foodtrucker!: Foodtrucker;
  foodtruckerSubject = new Subject<Foodtrucker>();

  constructor( private http: HttpClient, private router: Router ){}

  registrarFoodtrucker( ft: Foodtrucker ): void{

    this.http.post<Foodtrucker>( this.baseurl + '/FoodTrucker', ft )
    // tslint:disable-next-line: deprecation
    .subscribe( (response: Foodtrucker) => {
      this.foodtrucker = {
        apellido: response.apellido,
        email: response.email,
        foodtruck: response.foodtruck,
        idUsuario: response.idUsuario,
        nombre: response.nombre,
        contrasenia: '',
      };

      this.foodtruckerSubject.next(this.foodtrucker);
      this.router.navigate(['/home']);
    });

  }

}
