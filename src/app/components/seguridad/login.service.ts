import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable()
export class LoginService {

  private isUserLoggedIn!: boolean;
  public userLogged: Usuario | undefined;

  constructor(private router: Router){
    this.isUserLoggedIn = false;
  }

  isLogged(): boolean{
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(user: Usuario): void {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // tslint:disable-next-line: typedef
  getUserLoggedIn(){
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      return JSON.parse(currentUser);
    }

  }

  logOut(): void {
    this.isUserLoggedIn = false;
    this.userLogged = undefined;
    console.error('Sesion cerrada');
    this.router.navigate(['/login']);
  }

}
