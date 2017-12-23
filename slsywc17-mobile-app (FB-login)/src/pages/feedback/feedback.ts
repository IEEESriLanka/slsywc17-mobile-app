import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  public comment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: FirebaseProvider, private storage: Storage,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  public submitFeedback(comment){
    this.storage.get('profile')
      .then((val) => {
        this.firebase.submitFeedback(val.name, comment);
        this.comment = '';
        let alert = this.alertCtrl.create({
          title: 'Feedback submitted',
          subTitle: 'Your feedback about the IEEE SLSYWC 2017 has been successfully submitted.',
          buttons: ['OK']
        });
        alert.present();
      });
  }
}
