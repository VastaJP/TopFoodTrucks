import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Foodtruck } from 'src/app/models/foodtruck.model';
import { Imagen } from 'src/app/models/imagen.model';
import { FoodtruckService } from 'src/app/services/foodtruck.service';

@Component({
  selector: 'app-registrar-foodtruck',
  templateUrl: './registrar-foodtruck.component.html',
  styleUrls: ['./registrar-foodtruck.component.css']
})
export class RegistrarFoodtruckComponent implements OnInit {

  foodtruck!: Foodtruck;
  imagenesNulo!: Imagen[];

  constructor(private foodtruckService: FoodtruckService) { }

  ngOnInit(): void {
  }

  registrarFoodtruck( form: NgForm): void {
    // console.log(form);

    this.foodtruckService.registrarFoodtruck(
      this.foodtruck = {
        idFoodTruck: 0,
        nombre: form.value.nombre,
        servicio: form.value.servicio,
        descripcion: form.value.descripcion,
        website: form.value.website,
        instagram: form.value.instagram,
        twitter: form.value.twitter,
        whatsapp: form.value.whatsapp,
        imagenes: this.imagenesNulo,
      }
    );
  }
}
