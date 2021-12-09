import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "heroe.component.html",
})


export class HeroeComponent{
  name:string = "Peter";
  heroName:string  = "Spiderman";
  age:number = 16;

  get capitalizeHeroName(){
    return this.heroName.toUpperCase();
  }

  get getName():string{
    return this.name;
  }

  changeHeroName(heroName:string):string{
    if(heroName === "IronMan"){
      this.name = "Tony Stark";
      this.age = 40;
    }
    return this.heroName = heroName;
  }

}
