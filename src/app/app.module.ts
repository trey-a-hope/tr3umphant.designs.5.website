import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
//Routing
import { RoutingModule } from './/routing.module';
//Pages
import { AboutComponent } from './views/about/about.component';
import { ServiceComponent } from './views/service/service.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
