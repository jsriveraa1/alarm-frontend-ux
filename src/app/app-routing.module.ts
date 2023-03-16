import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {RecordComponent} from "./record/record.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'ingress', component: StartComponent },
  {path: 'record', component: RecordComponent },
  {path: '', redirectTo: 'ingress', pathMatch: 'full' },
  {path: '**', redirectTo: 'ingress', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
