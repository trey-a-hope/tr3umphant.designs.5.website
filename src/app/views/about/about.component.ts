import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private image1 = require("../../../../img/about/image1.png");
  private image2 = require("../../../../img/about/image2.png");
  private image3 = require("../../../../img/about/image3.png");


  constructor() { }

  ngOnInit() {
  }

}
