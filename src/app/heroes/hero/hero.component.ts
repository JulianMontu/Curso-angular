import { Component } from '@angular/core';



@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'ironman';
  public age: number = 45;
  heroes:string[] = ['ironman','superman','Batman','spiderman']

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`.toUpperCase();
  }

  changeHero():void{
    const randomIndex = Math.floor(Math.random() * this.heroes.length);
    this.name = this.heroes[randomIndex]
  }

  changeAge(){
    this.age = Math.floor(Math.random() * 80);
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
