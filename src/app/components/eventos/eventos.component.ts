import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];
  constructor() {}

  ngOnInit(): void {}
}
