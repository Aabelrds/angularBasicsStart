import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private DbzService:DbzService){

  }

  characters: Personaje[] = [

    {

      name: "Vegeta",
      power: 20000

    },
    {

      name: "Goku",
      power: 20000

    },
    {

      name: "Krilin",
      power: 10000

    }

  ]

  addNewCharacter(personaje: Personaje) {

    console.log(personaje,'Controlando evento enviado desde el hijo');

  }

  changeName(event: any) {

    console.log(event.name);

    console.log(event, 'Change Name');

  }
}
