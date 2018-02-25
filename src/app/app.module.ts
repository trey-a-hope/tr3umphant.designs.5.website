//Imported Modules
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule, 
         ReactiveFormsModule }          from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA }   from '@angular/core';
import { MDBBootstrapModule }           from 'angular-bootstrap-md';
import { ToasterModule }                from 'angular2-toaster';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations'; //Needed for ToasterModule
import { HttpModule }                   from '@angular/http';
import { HashLocationStrategy, 
         LocationStrategy}               from '@angular/common';
         
import { MatTabsModule } from '@angular/material/tabs';
import { Md2Module }  from 'md2';


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
import { PageNotFoundComponent }        from './views/page-not-found/page-not-found.component';
import { FullBlogComponent }            from './views/full-blog/full-blog.component';

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
    ContactComponent,
    PageNotFoundComponent,
    FullBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RoutingModule,
    HttpModule,
    ToasterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    Md2Module
  ],
  schemas: [ 
    NO_ERRORS_SCHEMA 
  ],
  providers: [
    EmailService,
    BlogService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }