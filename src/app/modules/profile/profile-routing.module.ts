import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from './pages/profil/profil.component';
import {AuthGuard} from '../shared/guards/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
