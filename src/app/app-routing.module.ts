import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/home/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
