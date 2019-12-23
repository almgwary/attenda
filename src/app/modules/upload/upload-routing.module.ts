import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadPageComponent} from './pages/upload-page/upload-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: UploadPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
