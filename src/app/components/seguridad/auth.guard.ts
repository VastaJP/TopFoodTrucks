import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private authService: LoginService,
    private router: Router,
  ){}

  canActivate(): boolean {

    if (!this.authService.isLogged()) {
      console.error('No estás logueado');
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

}
