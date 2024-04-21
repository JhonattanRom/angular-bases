import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo con Angular y Jhonattan';
  public contador: number = 10;
  increaseBy(value: number): void{
    this.contador += value;
  }
  reset():void {
    this.contador = 0;
  }
}
