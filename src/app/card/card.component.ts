import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  prodList: any;
  constructor(private hero: HeroService) {}

  ngOnInit(): void {
    this.hero.getProdDetails().subscribe((data) => {
      this.prodList = data;
    });
  }
}
