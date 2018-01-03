//Imported Modules
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA }   from '@angular/core';
import { MDBBootstrapModule }           from 'angular-bootstrap-md';
import { ToasterModule }                from 'angular2-toaster';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations'; //Needed for ToasterModule
import { HttpModule }                   from '@angular/http';

import { AppComponent }                 from './app.component';

//Routing
import { RoutingModule }                from './/routing.module';

//Views
import { NavbarComponent }              from './views/navbar/navbar.component';
import { FooterComponent }              from './views/footer/footer.component';
import { AboutComponent }               from './views/about/about.component';
import { ServiceComponent }             from './views/service/service.component';
import { HomeComponent }                from './views/home/home.component';
import { ProjectsComponent }            from './views/projects/projects.component';
import { ReviewsComponent }             from './views/reviews/reviews.component';
import { BlogsComponent }               from './views/blogs/blogs.component';
import { ContactComponent }             from './views/contact/contact.component';

//Services
import { EmailService }                 from './services/email.service';
import { BlogService }                  from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    ProjectsComponent,
    ReviewsComponent,
    BlogsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RoutingModule,
    HttpModule,
    ToasterModule,
    BrowserAnimationsModule
  ],
  schemas: [ 
    NO_ERRORS_SCHEMA 
  ],
  providers: [
    EmailService,
    BlogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }