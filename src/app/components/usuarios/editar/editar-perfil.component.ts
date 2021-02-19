import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { FoodtruckerService } from 'src/app/services/foodtrucker.service';
import { LoginService } from '../../seguridad/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  usuario!: Usuario;
  rolUsuario!: string;

  constructor(private loginService: LoginService, private foodTruckerService: FoodtruckerService) { }

  ngOnInit(): void {

    this.usuario = this.loginService.getUserLoggedIn()
    this.rolUsuario = this.usuario.rol;

  }

  logOut(): void {
    this.loginService.logOut();
  }

  editarPerfil(form: NgForm): void{
    this.foodTruckerService.getFoodtrucker(this.usuario.idUsuario, this.usuario.token);
  }

}
