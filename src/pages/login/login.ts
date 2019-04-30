import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { AuthService } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credencial = {
    displayName:"",
    email:"",
    password:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.auth.doLogin(this.credencial)
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot(SigninPage);
    }, err => {
      console.log(err);
    });
	}
}
