import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './views/home/home.component';
import { AboutComponent }       from './views/about/about.component';
import { ServiceComponent }     from './views/service/service.component';
import { ProjectsComponent }     from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'projects', component: ProjectsComponent }    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],  
  declarations: []
})
export class RoutingModule { }
