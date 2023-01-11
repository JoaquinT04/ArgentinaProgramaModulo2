import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = []

  constructor() { }

  //
  getAllPersonas():Persona[]{
    let persona1 = new Persona("Joaquin","Tejerina",24)
    this.personas.push(persona1)
    this.personas.push(new Persona("Jorge","Perez",21))
    this.personas.push(new Persona("Niki","Nicol",22))

    return this.personas
  }

  // solo un ejemplo de los servicios que se pueden ofrecer

  removePersonas(persona:Persona):void{
  }

}

