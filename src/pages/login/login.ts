import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('profile')
      .then((val) => {
        if(val != undefined){
          this.navCtrl.setRoot('TabsPage');
        }
      });
  }

  ionViewDidLoad() {
  }

  login(name: string, email: string, telephone: string) {
    var prof = `{
          "name": "${name}",
          "email": "${email}",
          "telephone": "${telephone}"
        }`;
    this.storage.set('profile', prof);
    this.navCtrl.setRoot('TabsPage');
  }
}
