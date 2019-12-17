import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { ProfilComponent } from './modules/profile/pages/profil/profil.component';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';


const routes: Routes = [
  { path: 'login',  loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [ AuthGuard ]},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
