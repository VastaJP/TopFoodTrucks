import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './components/seguridad/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class AppComponent implements OnInit{
  title = 'TopFoodTrucks';

  isLogged!: boolean;
  rolUsuario!: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {

    if (this.loginService.isLogged()) {

      this.isLogged = true;
      this.rolUsuario = this.loginService.getUserLoggedIn().rol;

    }

  }

}
