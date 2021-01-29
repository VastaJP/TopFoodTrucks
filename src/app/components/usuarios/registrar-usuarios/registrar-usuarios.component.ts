import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl } from '@angular/forms';
//import { UsuariosService } from "src/app/services/usuarios-service";
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }
  formRegistrar = new FormControl('');
  ngOnInit(): void {
  }
  nombre = ""
  apellido = ""
  email = ""
  pass = ""
  rolUsuario = ""

  onSubmit(formulario: NgForm){
    UsuariosService.registrar(formulario.value.nombreUsuario, formulario.value.apellidoUsuario, 
      formulario.value.email, formulario.value.rolUsuario, formulario.value.contrasenia1);
  }
}
