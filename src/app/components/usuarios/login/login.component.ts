import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Foodtrucker } from 'src/app/models/foodtrucker.model';
import { OrganizadorEventos } from 'src/app/models/Organizador.model';
import { Usuario } from 'src/app/models/usuario.model';
import { FoodtruckerService } from 'src/app/services/foodtrucker.service';
import { OrganizadorEventosService } from 'src/app/services/organizador.service';
import { LoginService } from '../../seguridad/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  selectRol!: string;

  foodtrucker!: Foodtrucker;
  organizador!: OrganizadorEventos;
  usuario!: Usuario;

  constructor(
    private foodtruckerService: FoodtruckerService,
    private organizadorService: OrganizadorEventosService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUsuario(form: NgForm): void {
    // Foodtrucker
    // tslint:disable-next-line: triple-equals
    if (this.selectRol == 'FoodTrucker') {
      this.foodtruckerService
        .login(form.value.email, form.value.contrasenia)
        // tslint:disable-next-line: deprecation
        .subscribe(
          (response: any) => {
            // Obtengo las claves del token
            const keys = response.headers.keys();
            // Mapeo las claves para poder obtenerlas
            const headers = keys.map(
              (key: any) => `${key}: ${response.headers.get(key)}`
            );

            if (!response.body) {
              // Usuario no existe
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
              token: '',
            };

            this.loginService.setUserLoggedIn(this.usuario);

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
    // Organizador
    else {
      this.organizadorService
        .login(form.value.email, form.value.contrasenia)
        // tslint:disable-next-line: deprecation
        .subscribe(
          (response: any) => {
            // Obtengo las claves del token
            const keys = response.headers.keys();
            // Mapeo las claves para poder obtenerlas
            const headers = keys.map(
              (key: any) => `${key}: ${response.headers.get(key)}`
            );
            // Extraigo el valor del token en las 2da posicion de los header ('token: xxxxxxx'), lo corto y me quedo solo con el valor
            const token = headers[1].split(': ')[1]; // xxxxxxx

            if (!response.body) {
              // Usuario no existe
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
}
