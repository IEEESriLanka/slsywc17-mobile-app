import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackPage } from './feedback';
import {EmailComposer} from "@ionic-native/email-composer";

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
  ],
  providers: [
    EmailComposer
  ]
})
export class FeedbackPageModule {}
