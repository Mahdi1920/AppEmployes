import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'myMenu', component:MyMenuComponent}, 
  {path:'presentation', component:PresentationComponent},
  {path:'employesList', component:EmployesListComponent},
  {path:'selectedEmploye/:matricule', component:SelectedEmployeComponent},
  {path:'ajoutEmploye', component:AjoutEmployeComponent},
  {path:'', redirectTo:'presentation', pathMatch:'full'},
  {path:'**', component:Error404Component} 
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
