import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private rightWayTrafficSolutions = require("../../../../img/projects/rightwayts.png");
  private tr3umphantDesigns20 = require("../../../../img/projects/tr3umphant_designs_2.0.png");
  private brieHope = require("../../../../img/projects/brie_hope.png");
  private gointercommarketing = require("../../../../img/projects/gointercommarketing.png");
  private treyahope = require("../../../../img/projects/treyahope.png");

  constructor() { }

  ngOnInit() {
  }

}
