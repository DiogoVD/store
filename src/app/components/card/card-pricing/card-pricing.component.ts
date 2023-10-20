import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  constructor() { }
  @Input()
  gameType:string = "Digital PS4"
  gamePrice:string = "R$ 100,00"

  ngOnInit(): void {
  }

}
