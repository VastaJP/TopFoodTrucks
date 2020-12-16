

import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registrar-eventos',
  templateUrl: './registrar-eventos.component.html',
  styleUrls: ['./registrar-eventos.component.css']
})
export class RegistrarEventosComponent implements OnInit {

  isShown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hide_form() {
    this.isShown = !this.isShown;
  }

}
