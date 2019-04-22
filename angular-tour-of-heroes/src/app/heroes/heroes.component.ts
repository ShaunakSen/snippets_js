import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROES } from '../mock-heroes';  

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] //the location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {

  // define a component property called heroes to expose HEROES array for binding

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: "Shazaam!"
  };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  

  constructor() { }

  ngOnInit() {

    // Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  }

}
