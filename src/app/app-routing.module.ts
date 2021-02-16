import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrarEventosComponent } from './components/eventos/registrar-eventos/registrar-eventos.component';
import { RegistrarUsuariosComponent } from './components/usuarios/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleFoodtruckComponent } from './components/foodtrucks/detalle-foodtruck/detalle-foodtruck.component';
import { RegistrarFoodtruckComponent } from './components/foodtrucks/registrar-foodtruck/registrar-foodtruck.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registrarse', component: RegistrarUsuariosComponent},
  { path: 'registrar-evento', component: RegistrarEventosComponent},
  { path: 'foodtruck/nuevo', component: RegistrarFoodtruckComponent},
  { path: 'foodtruck/:id', component: DetalleFoodtruckComponent}

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
