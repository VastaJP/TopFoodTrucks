import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-root',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css'],
})
export class AppComponent {
	  title = 'TopFoodTrucks';
	  
	  constructor (private router: Router) {}
}
