import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


heroes: string[] = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America", "AntMan"];
deletedHero:string | undefined = "";

deleteHero(){
  (this.heroes.length === 0) ? this.deletedHero= "UPS NO HEROES " : this.deletedHero = this.heroes.pop();
}



}


