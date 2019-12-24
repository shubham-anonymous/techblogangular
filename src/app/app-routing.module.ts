import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component"
import {AboutUsComponent} from "./about-us/about-us.component"
import {HomeComponent} from "./home/home.component"
import {CategorylistComponent} from './categorylist/categorylist.component'
const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Categories/:id', component: CategorylistComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
