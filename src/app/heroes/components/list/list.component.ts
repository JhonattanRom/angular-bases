import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ['Thor', 'Spiderman', 'Ironman', 'Hulk'];
  public deletedHero?: string;

  public deleteHero():void{
    this.deletedHero = this.heroesNames.pop();
  }
}
