import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../seguridad/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rolUsuario!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

      this.rolUsuario = this.loginService.getUserLoggedIn().rol;

  }

  logOut(): void {
    this.loginService.logOut();
  }

  detalle(): void {
    this.router.navigate(['foodtruck/' + 1]);
  }

}
