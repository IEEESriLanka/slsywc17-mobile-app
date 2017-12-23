import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DelegatesPage } from './delegates';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    DelegatesPage,
  ],
  imports: [
    IonicPageModule.forChild(DelegatesPage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class DelegatesPageModule {}
