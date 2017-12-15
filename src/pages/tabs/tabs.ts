import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  scheduleRoot = 'SchedulePage'
  delegatesRoot = 'DelegatesPage'
  infoRoot = 'InfoPage'

  constructor(public navCtrl: NavController) {}

}
