import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import {FirebaseProvider} from "../providers/firebase/firebase";

import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';

import { IonicStorageModule } from '@ionic/storage';

import { AnimationService, AnimatesDirective } from 'css-animator';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyB3JepepQe1c2wFoYSu1AMVEsGpAI6c9kI",
  authDomain: "slsywc17.firebaseapp.com",
  databaseURL: "https://slsywc17.firebaseio.com",
  projectId: "slsywc17",
  storageBucket: "slsywc17.appspot.com",
  messagingSenderId: "511034928615"
};

@NgModule({
  declarations: [
    MyApp,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    Facebook,
    AuthProvider,
    AnimationService
  ]
})
export class AppModule {}
