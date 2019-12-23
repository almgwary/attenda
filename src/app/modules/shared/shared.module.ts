import { ModuleWithProviders , NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SharedDataService } from './services/shared-data.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { PoweredByComponent } from './components/powered-by/powered-by.component';
import {AttendanceLoadedGuard} from './guards/attendance-loaded.guard';


const providers = [ SharedDataService, AuthGuard, ApiService, AttendanceLoadedGuard ];

@NgModule({
  declarations: [
    SpinnerComponent,
    PoweredByComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    SpinnerComponent,
    PoweredByComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
