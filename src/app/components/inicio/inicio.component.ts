import { Component, OnInit } from '@angular/core';
import { LoginService } from '../seguridad/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  rolUsuario!: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

      this.rolUsuario = this.loginService.getUserLoggedIn().rol;

  }

  logOut(): void {
    this.loginService.logOut();
  }

}
