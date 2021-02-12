import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrganizadorEventos } from '../models/Organizador.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizadorEventosService {

  baseurl = environment.baseUrl;

  private organizador!: OrganizadorEventos;
  organizadorSubject = new Subject<OrganizadorEventos>();

  constructor( private http: HttpClient, private router: Router ){}

  registrarOrganizador( org: OrganizadorEventos ): void{

    this.http.post<OrganizadorEventos>( this.baseurl + '/Organizador', org )
    // tslint:disable-next-line: deprecation
    .subscribe( (response: OrganizadorEventos) => {
      this.organizador = {
        apellido: response.apellido,
        email: response.email,
        idUsuario: response.idUsuario,
        nombre: response.nombre,
        contrasenia: '',
        eventos: response.eventos,
      };

      this.organizadorSubject.next(this.organizador);
      this.router.navigate(['/home']);
    });

  }

}
