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

  login(email: string, contrasenia: string): void {

    // Se preparan los header para mandar por request
    const httpOptions =
    {
      headers: new HttpHeaders({
        email,
        contrasenia,
      }),
      observe: 'response' as const
      };

    this.http.post<Headers>( this.baseurl + '/FoodTrucker/autenticacion', null, httpOptions)
      // tslint:disable-next-line: deprecation
      .subscribe(
        (response: any) => {

          // Obtengo las claves del token
          const keys = response.headers.keys();
          // Mapeo las claves para poder obtenerlas
          const headers = keys.map( (key: any) =>
            `${key}: ${response.headers.get(key)}`
          );
          if (headers[1]){
          // Extraigo el valor del token en las 2da posicion de los header ('token: xxxxxxx'), lo corto y me quedo solo con el valor
          const token = headers[1].split(': ')[1]; // xxxxxxx

          if (!response.body) { // Usuario no existe
            return;
          }

          this.foodtrucker = response.body;

          // Obtengo los datos del usuario logueado
          const usr = response.body;
          this.usuario = {
            nombre: usr.nombre,
            apellido: usr.apellido,
            contrasenia: usr.contrasenia,
            email: usr.email,
            idUsuario: usr.idUsuario,
            rol: 'Foodtrucker',
            // tslint:disable-next-line: object-literal-shorthand
            token: token,
          };

          this.loginService.setUserLoggedIn(this.usuario);
          this.foodtruckerSubject.next(this.foodtrucker);

          this.router.navigate(['inicio']);

          }
        },
        (error: HttpErrorResponse) => {
          // tslint:disable-next-line: triple-equals
          if (error.status == 403) {
            console.error('Contraseña incorrecta');
          // tslint:disable-next-line: triple-equals
          } else if (error.status == 404) {
            console.error('Mail inexistente');
          }

        }
      );

    // this.foodtruckerSubject.next(true);
  }

}
