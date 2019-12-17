import { ModuleWithProviders , NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SharedDataService } from './services/shared-data.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


const providers = [ SharedDataService, AuthGuard, ApiService ];

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
  ],
  providers,
  exports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    SpinnerComponent
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
