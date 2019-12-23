import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import {UploadPageComponent} from './pages/upload-page/upload-page.component';
import {UploadComponent} from './components/upload/upload.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [UploadPageComponent, UploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
