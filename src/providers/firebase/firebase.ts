import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  submitFeedback(name, comment) {
    this.afd.list('/feedback/' + name + '/').push(comment);
  }

}
