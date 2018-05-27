import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public rightWayTrafficSolutions = require("../../../../img/projects/rightwayts.png");
  public tr3umphantDesigns20 = require("../../../../img/projects/tr3umphant_designs_2.0.png");
  public gointercommarketing = require("../../../../img/projects/gointercommarketing.png");
  public treyahope = require("../../../../img/projects/treyahope.png");
  public tr3designs_android = require("../../../../img/projects/tr3designs_android.png");
  public tr3designs_ios = require("../../../../img/projects/tr3designs_ios.png");

  constructor() { }

  ngOnInit() {
  }

}
