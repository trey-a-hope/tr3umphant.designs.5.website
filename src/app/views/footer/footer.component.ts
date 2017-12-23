import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',//'footer' is already taken by mdb.
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}
