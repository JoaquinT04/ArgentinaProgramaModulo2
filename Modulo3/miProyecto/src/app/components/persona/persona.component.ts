import { Component, Input, OnInit } from '@angular/core';


import { Persona } from "src/app/models/Persona";
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})


export class PersonaComponent implements OnInit{

  @Input() atributoDePersona: Persona = new Persona()

  constructor(){}

  ngOnInit(): void {
  }

  cumple(persona:Persona){
    persona.cumplirAnios()
  }
  noCumple(persona:Persona){
    persona.disminuirEdad()
  }

}
