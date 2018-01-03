import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  private logoUrl = require("../../../../img/logo/tr3umphant.png");

  private quinnten_fuller = require("../../../../img/reviews/quinnten_fuller.png");

  constructor() { }

  ngOnInit() {
  }

}
