import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPopoverPage } from './show-popover';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ShowPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPopoverPage),
    NgxQRCodeModule
  ],
})
export class ShowPopoverPageModule {}
