import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-show-popover',
  templateUrl: 'show-popover.html',
})
export class ShowPopoverPage {
  public createdCode:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public viewCtrl: ViewController) {
    this.storage.get('profile')
      .then((val) => {
        this.createdCode = `{
          "name": "${val.name}",
          "email": "${val.email}",
          "profile": "${val.picture_large.data.url}"
        }`;
      });
  }

  ionViewDidLoad() {
  }
}
