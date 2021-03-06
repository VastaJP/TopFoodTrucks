import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrarEventosComponent } from './components/eventos/registrar-eventos/registrar-eventos.component';
import { RegistrarFoodtruckComponent } from './components/foodtrucks/registrar-foodtruck/registrar-foodtruck.component';
import { RegistrarUsuariosComponent } from './components/usuarios/registrar/registrar-usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { DetalleFoodtruckComponent } from './components/foodtrucks/detalle-foodtruck/detalle-foodtruck.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './components/seguridad/auth.guard';
import { EditarPerfilComponent } from './components/usuarios/editar/editar-perfil.component';
import { EditarFoodtruckComponent } from './components/foodtrucks/editar-foodtruck/editar-foodtruck.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registrarse', component: RegistrarUsuariosComponent},
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  { path: 'registrar-evento', component: RegistrarEventosComponent, canActivate: [AuthGuard]},
  { path: 'foodtruck/nuevo', component: RegistrarFoodtruckComponent},
  { path: 'editar-perfil', component: EditarPerfilComponent, canActivate: [AuthGuard]},
  { path: 'foodtruck/:id', component: DetalleFoodtruckComponent},
  { path: 'foodtruck/editar/:id', component: EditarFoodtruckComponent}
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
