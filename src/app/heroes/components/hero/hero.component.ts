import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 15;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public description(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName():void {
    this.name = 'Ironman';
  }
  public changeAge():void{
    this.age = 45;
  }

  public resetForm():void {
    this.name = 'Spiderman';
    this.age = 15;
  }
}
