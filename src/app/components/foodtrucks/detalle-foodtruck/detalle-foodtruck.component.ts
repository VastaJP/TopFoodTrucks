import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Foodtruck } from 'src/app/models/foodtruck.model';
import { FoodtruckService } from 'src/app/services/foodtruck.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalle-foodtruck',
  templateUrl: './detalle-foodtruck.component.html',
  providers: [ FoodtruckService ],
  styleUrls: ['./detalle-foodtruck.component.css']
})
export class DetalleFoodtruckComponent implements OnInit, OnDestroy {
  foodtruck!: Foodtruck;

  private foodtruckSubscription!: Subscription;

  constructor(private foodtruckService: FoodtruckService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.foodtruckService.obtenerFoodtruck(id)
    // tslint:disable-next-line: deprecation
    .subscribe(foodtruck => this.foodtruck = foodtruck);
    // this.foodtruckSubscription = this.foodtruckService.obtenerActualListener()
    //   // tslint:disable-next-line: deprecation
    //   .subscribe( (ft: Foodtruck) => {
    //     this.foodtruck.nombre = ft.nombre;
    //   });
  }

  ngOnDestroy(): void{
    this.foodtruckSubscription.unsubscribe();
  }

}
