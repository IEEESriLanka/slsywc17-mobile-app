import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Storage} from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('logo-img') logoElm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private afAuth: AngularFireAuth,
              private facebook: Facebook, private platform: Platform, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let alert = this.alertCtrl.create({
      title: 'Attention',
      subTitle: 'Internet connection must be enabled for this app to function properly',
      buttons: ['OK']
    });
    alert.present();
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => {
        console.log(res.additionalUserInfo.profile);
        console.log(res.credential.accessToken.toString());
        this.storage.set('profile', res.additionalUserInfo.profile);
        this.storage.set('credentials', res.credential.accessToken);

        this.navCtrl.setRoot('TabsPage');
      });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.storage.set('profile', profile);
          this.storage.set('credentials', res.authResponse.accessToken);

          this.navCtrl.setRoot('TabsPage');
        });
      })
    }
  }
}
