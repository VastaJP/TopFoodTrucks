import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Evento } from 'src/app/models/evento.model';
import { Foodtruck } from 'src/app/models/foodtruck.model';
import { Foodtrucker } from 'src/app/models/foodtrucker.model';
import { OrganizadorEventos } from 'src/app/models/Organizador.model';
import { FoodtruckerService } from 'src/app/services/foodtrucker.service';
import { OrganizadorEventosService } from 'src/app/services/organizador.service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  selectRol!: string;

  foodtrucker!: Foodtrucker;
  foodtruckNulo!: Foodtruck;

  organizador!: OrganizadorEventos;
  eventosNulo!: Evento[];

  constructor(
    private foodtruckerService: FoodtruckerService,
    private organizadorService: OrganizadorEventosService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm): void{ }

  registrarUsuario(form: NgForm): void{

    console.log(form);

    // tslint:disable-next-line: triple-equals
    if (form.value.contrasenia1 == form.value.contrasenia2) {
      // tslint:disable-next-line: triple-equals
      if (this.selectRol == 'FoodTrucker') {
        this.foodtruckerService.registrarFoodtrucker(
          this.foodtrucker = {
            idUsuario: '',
            nombre: form.value.nombreUsuario,
            apellido: form.value.apellidoUsuario,
            email: form.value.email,
            contrasenia: form.value.contrasenia1,
            foodtruck: this.foodtruckNulo,
          });
      }
      else{
        this.organizadorService.registrarOrganizador(
          this.organizador = {
            idUsuario: '',
            nombre: form.value.nombreUsuario,
            apellido: form.value.apellidoUsuario,
            email: form.value.email,
            contrasenia: form.value.contrasenia1,
            eventos: this.eventosNulo,
          });
      }
    }
    // TODO Modal
    /*
    else{
      const dialogRef = this.dialog.open(ErrorComponent, {
        width: '250px',
        data: { textoError: 'Error prueba' }
      });
      // tslint:disable-next-line: deprecation
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    */
  }

}
