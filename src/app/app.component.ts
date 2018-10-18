import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'

// import { HomePage } from '../pages/home/home';
// import { SigninPage } from '../pages/signin/signin';
import { ContasPage } from '../pages/contas/contas';

const config = {
  apiKey: "AIzaSyAt_4sGgAs4BP2AH5e_FqI9Yxxu6jTR4-s",
  authDomain: "chat-ionic3-firebase.firebaseapp.com",
  databaseURL: "https://chat-ionic3-firebase.firebaseio.com",
  projectId: "chat-ionic3-firebase",
  storageBucket: "chat-ionic3-firebase.appspot.com",
  messagingSenderId: "187596625088"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ContasPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

