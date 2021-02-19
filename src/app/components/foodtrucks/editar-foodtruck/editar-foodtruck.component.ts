import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Foodtruck } from 'src/app/models/foodtruck.model';
import { Imagen } from 'src/app/models/imagen.model';
import { FoodtruckService } from 'src/app/services/foodtruck.service';

@Component({
  selector: 'app-editar-foodtruck',
  templateUrl: './editar-foodtruck.component.html',
  styleUrls: ['./editar-foodtruck.component.css']
})
export class EditarFoodtruckComponent implements OnInit {

  foodtruck!: Foodtruck;
  foodtruckNuevo!: Foodtruck;
  imagenesNulo!: Imagen[];

  constructor(private foodtruckService: FoodtruckService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') as string;

    this.foodtruckService.obtenerFoodtruck(id)
      // tslint:disable-next-line: deprecation
      .subscribe( (response: Foodtruck) => {
        this.foodtruck = response;
      });

  }

  editarFoodtruck(form: NgForm): void {

    this.foodtruckNuevo = {
      idFoodTruck: this.foodtruck.idFoodTruck,
      nombre: form.value.nombre,
      servicio: form.value.servicio,
      descripcion: form.value.descripcion,
      website: form.value.website,
      instagram: form.value.instagram,
      twitter: form.value.twitter,
      whatsapp: form.value.whatsapp,
      imagenes: this.imagenesNulo,
    };

    this.foodtruckService.editarFoodtruck(this.foodtruckNuevo);

  }

}
