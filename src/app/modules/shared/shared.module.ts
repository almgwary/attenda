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
import { ToEmailPipe } from './pipes/to-email.pipe';
import { EmailToPipe } from './pipes/email-to.pipe';
import { ImgDirective } from './directives/img.directive';


const providers = [ SharedDataService, AuthGuard, ApiService, AttendanceLoadedGuard ];

@NgModule({
  declarations: [
    SpinnerComponent,
    PoweredByComponent,
    ToEmailPipe,
    EmailToPipe,
    ImgDirective
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
    PoweredByComponent,
    ToEmailPipe,
    EmailToPipe,
    ImgDirective
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
