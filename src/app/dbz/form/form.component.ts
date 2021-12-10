import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() characters:Personaje[] = [];
  @Output() onNewCharacter:EventEmitter<Personaje> = new EventEmitter();

  new: Personaje = {

    name: "",
    power: 0

  }

  add(){

    if(this.new.name.trim().length === 0 ){

      return;
    }

    this.characters.push(this.new);
    this.onNewCharacter.emit(this.new);

    this.new = {

      name: "",
      power: 0

    }

  }

}
