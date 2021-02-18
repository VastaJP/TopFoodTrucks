import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../components/seguridad/login.service';
import { OrganizadorEventos } from '../models/Organizador.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizadorEventosService {

  baseurl = environment.baseUrl;

  // Registrar
  private organizador!: OrganizadorEventos;
  organizadorSubject = new Subject<OrganizadorEventos>();

  // Login
  private usuario: Usuario | undefined;

  constructor( private http: HttpClient, private router: Router, private loginService: LoginService ){}

  registrarOrganizador( org: OrganizadorEventos ): void{

    this.http.post<OrganizadorEventos>( this.baseurl + '/Organizador', org )
    // tslint:disable-next-line: deprecation
    .subscribe( (response: OrganizadorEventos) => {
      this.usuario = {
        apellido: response.apellido,
        email: response.email,
        idUsuario: response.idUsuario,
        nombre: response.nombre,
        contrasenia: '',
        rol: 'Organizador',
        token: (response.idUsuario + '123456')
      };

      this.loginService.setUserLoggedIn(this.usuario);
      this.organizadorSubject.next(this.organizador);
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

    this.http.post<Headers>( this.baseurl + '/Organizador/autenticacion', null, httpOptions)
      // tslint:disable-next-line: deprecation
      .subscribe( (response: any) => {

        // Obtengo las claves del token
        const keys = response.headers.keys();
        // Mapeo las claves para poder obtenerlas
        const headers = keys.map( (key: any) =>
          `${key}: ${response.headers.get(key)}`
        );
        // Extraigo el valor del token en las 2da posicion de los header ('token: xxxxxxx'), lo corto y me quedo solo con el valor
        const token = headers[1].split(': ')[1]; // xxxxxxx

        if (!response.body) { // Usuario no existe
          return;
        }

        this.organizador = response.body;

        // Obtengo los datos del usuario logueado
        const usr = response.body;
        this.usuario = {
          nombre: usr.nombre,
          apellido: usr.apellido,
          contrasenia: usr.contrasenia,
          email: usr.email,
          idUsuario: usr.idUsuario,
          rol: 'Organizador',
          // tslint:disable-next-line: object-literal-shorthand
          token: token,
        };

        this.loginService.setUserLoggedIn(this.usuario);
        this.organizadorSubject.next(this.organizador);

        this.router.navigate(['inicio']);

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

  }

}
