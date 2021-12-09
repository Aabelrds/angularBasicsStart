import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template:`
    <div class="container">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="container-contador">
        <button (click)="acumulador(base)" id="sumar"> + {{base}} </button>
        <span>{{numero}}</span>
        <button (click)="acumulador(-base)" id="rest"> - {{base}} </button>
      </div>
    </div>
  `,
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent{

  title:string = 'Contador';
  numero= 10;
  base:number = 1

  acumulador(valor:number){
    this.numero+=valor;
  }

}
