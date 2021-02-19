import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../components/seguridad/login.service';
import { Foodtrucker } from '../models/foodtrucker.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class FoodtruckerService {

  baseurl = environment.baseUrl;

  // Registrar
  private foodtrucker!: Foodtrucker;
  foodtruckerSubject = new Subject<Foodtrucker>();

  // Login
  loginSubject = new Subject<Usuario>();
  private usuario: Usuario | undefined;

  constructor( private http: HttpClient, private router: Router, private loginService: LoginService){}

  registrarFoodtrucker( ft: Foodtrucker ): void{

    this.http.post<Foodtrucker>( this.baseurl + '/FoodTrucker', ft )
    // tslint:disable-next-line: deprecation
    .subscribe( (response: Foodtrucker) => {
      this.foodtrucker = response;
      this.usuario = {
        apellido: response.apellido,
        email: response.email,
        idUsuario: response.idUsuario,
        nombre: response.nombre,
        contrasenia: '',
        rol: 'Foodtrucker',
        token: (response.idUsuario + '123456')
      };

      this.loginService.setUserLoggedIn(this.usuario);
      this.foodtruckerSubject.next(this.foodtrucker);
      this.router.navigate(['/inicio']);
    });

  }

  login(email: string, contrasenia: string): Observable<HttpResponse<Headers>> {

    // Se preparan los header para mandar por request
    const httpOptions =
    {
      headers: new HttpHeaders({
        email,
        contrasenia,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      }),
      observe: 'response' as const
      };

    return this.http.post<Headers>( this.baseurl + '/FoodTrucker/autenticacion', null, httpOptions)

    // this.foodtruckerSubject.next(true);
  }

  getFoodtrucker(id: string): Observable<Foodtrucker> {

    const httpOptions = {
      headers: new HttpHeaders({
        token: id + '123456',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
    };

    return this.http.get<Foodtrucker>( this.baseurl + '/Foodtrucker/' + id, httpOptions);

  }

  editarFoodtrucker(foodtrucker: Foodtrucker): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
    };

    return this.http.post<Foodtrucker>(this.baseurl + '/Foodtrucker/' + foodtrucker.idUsuario, foodtrucker, httpOptions)

  }

}
