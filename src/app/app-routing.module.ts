import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrarEventosComponent } from './components/eventos/registrar-eventos/registrar-eventos.component';
import { RegistrarFoodtruckComponent } from './components/foodtrucks/registrar-foodtruck/registrar-foodtruck.component';
import { RegistrarUsuariosComponent } from './components/usuarios/registrar/registrar-usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registrarse', component: RegistrarUsuariosComponent},
  { path: 'registrar-evento', component: RegistrarEventosComponent},
  { path: 'foodtruck/nuevo', component: RegistrarFoodtruckComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
