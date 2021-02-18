import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodtruckerService } from 'src/app/services/foodtrucker.service';
import { OrganizadorEventosService } from 'src/app/services/organizador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectRol!: string;

  constructor(
    private foodtruckerService: FoodtruckerService,
    private organizadorService: OrganizadorEventosService,
  ) { }

  ngOnInit(): void {
  }

  loginUsuario(form: NgForm): void {

    // tslint:disable-next-line: triple-equals
    if (this.selectRol == 'FoodTrucker') {
      this.foodtruckerService.login(
        form.value.email,
        form.value.contrasenia
      );
    } else {
      this.organizadorService.login(
        form.value.email,
        form.value.contrasenia
      );
    }
  }

}
