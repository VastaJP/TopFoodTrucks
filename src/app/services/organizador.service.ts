import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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

  login(email: string, contrasenia: string): Observable<HttpResponse<Headers>> {

    // Se preparan los header para mandar por request
    const httpOptions =
    {
      headers: new HttpHeaders({
        email,
        contrasenia,
      }),
      observe: 'response' as const
      };

    return this.http.post<Headers>( this.baseurl + '/Organizador/autenticacion', null, httpOptions);

  }

}
