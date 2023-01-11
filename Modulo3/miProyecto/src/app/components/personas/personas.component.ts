import { Component, OnInit } from '@angular/core';

import { Persona } from "src/app/models/Persona";
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})


export class PersonasComponent implements OnInit{

  // atributos
  personas:Persona[] = []

  // constructor
  constructor(){

  }

  // comportamiento

  ngOnInit(): void {
  }

}
