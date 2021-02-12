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
import { InicioComponent } from './components/home/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    RegistrarEventosComponent,
    RegistrarUsuariosComponent,
    LoginComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
