import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file.
  styleUrls: ['./heroes.component.css'] //the location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Shazaam!"
  };

  constructor() { }

  ngOnInit() {

    // Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  }

}
