import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  nombre = '';
  apellido = '';
  email = '';
  pass = '';
  rolUsuario = '';

  constructor() { }
  formRegistrar = new FormControl('');
  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm): void{ }

  registrarUsuario(form: NgForm): void{

  }

}
