import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  name:string = "Alejandro";
  surname:string = "Rodrigues"
  formation:string = "Aprendiendo Angular"
}
