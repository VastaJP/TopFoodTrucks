import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistrarEventosComponent } from './components/eventos/registrar-eventos/registrar-eventos.component';
import { RegistrarUsuariosComponent } from './components/usuarios/registrar/registrar-usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RegistrarFoodtruckComponent } from './components/foodtrucks/registrar-foodtruck/registrar-foodtruck.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorComponent } from './components/usuarios/error/error.component';
import { LoginService } from './components/seguridad/login.service';
import { AuthGuard } from './components/seguridad/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    RegistrarEventosComponent,
    RegistrarUsuariosComponent,
    LoginComponent,
    RegistrarFoodtruckComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ LoginService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
