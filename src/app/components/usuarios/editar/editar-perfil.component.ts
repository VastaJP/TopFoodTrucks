import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../seguridad/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  rolUsuario!: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

      this.rolUsuario = this.loginService.getUserLoggedIn().rol;

  }

  logOut(): void {
    this.loginService.logOut();
  }

}
