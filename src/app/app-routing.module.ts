import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ProjectsComponent} from "./projects/projects.component";
import {TeamComponent} from "./team/team.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }