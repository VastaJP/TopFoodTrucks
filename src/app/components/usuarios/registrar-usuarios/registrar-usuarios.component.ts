import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl } from '@angular/forms';
import { Foodtruck } from 'src/app/models/foodtruck.model';
import { Foodtrucker } from 'src/app/models/foodtrucker.model';
import { FoodtruckerService } from 'src/app/services/foodtrucker.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  selectRol!: string;
  foodtrucker!: Foodtrucker;
  foodtruckNulo!: Foodtruck;

  constructor(private foodtruckerService: FoodtruckerService) { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm): void{ }

  registrarUsuario(form: NgForm): void{

    console.log(form);

    // tslint:disable-next-line: triple-equals
    if (this.selectRol == 'FoodTrucker') {
      // tslint:disable-next-line: triple-equals
      if (form.value.contrasenia1 == form.value.contrasenia2) {

        this.foodtruckerService.registrarFoodtrucker(
          this.foodtrucker = {
            idUsuario: 0,
            nombre: form.value.nombreUsuario,
            apellido: form.value.apellidoUsuario,
            email: form.value.email,
            contrasenia: form.value.contrasenia1,
            foodtruck: this.foodtruckNulo,
          });
      }
    }
  }

}
