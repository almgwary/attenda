import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedDataService } from './services/shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ SharedDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
