import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-delegates',
  templateUrl: 'delegates.html',
})
export class DelegatesPage {
  public friends: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public popoverCtrl: PopoverController,
              private barcodeScanner: BarcodeScanner) {
    this.storage.get('friends')
      .then((val) => {
        if(val == undefined){
          this.storage.set('friends', []);
        }else{
          this.friends = val;
        }
      });
  }

  ionViewDidLoad() {
  }

  public show(event){
    let popover = this.popoverCtrl.create('ShowPopoverPage');
    popover.present();
  }

  public scan(event){
    this.barcodeScanner.scan().then(barcodeData => {
      this.storage.get(JSON.parse(barcodeData.text).email)
        .then((val) => {
          if(val == undefined){
            this.friends.push(JSON.parse(barcodeData.text));
            this.storage.set('friends', this.friends);
            this.storage.set(JSON.parse(barcodeData.text).email, true);
          }else{
            // Do nothing
          }
        });
    }, (err) => {
      console.log('Error: ', err);
    });
  }

}
