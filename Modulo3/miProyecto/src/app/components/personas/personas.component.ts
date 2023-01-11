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
    let persona1 = new Persona("Joaquin","Tejerina",24)
    this.personas.push(persona1)
    this.personas.push(new Persona("Jorge","Perez",21))
    this.personas.push(new Persona("Niki","Nicol",22))
  }

}
