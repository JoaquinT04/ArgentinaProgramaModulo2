import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Traigo el componente de Personas
import { PersonasComponent } from './components/personas/personas.component';
// Traigo el componente de Persona
import { PersonaComponent } from './components/persona/persona.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //Declaro el componente de Personas
    PersonasComponent,
    //Declaro el componente de Persona
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

