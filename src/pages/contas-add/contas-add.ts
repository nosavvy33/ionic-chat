import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ContasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas-add',
  templateUrl: 'contas-add.html',
})
export class ContasAddPage {

  key = null;
  acount = { description:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.key = this.navParams.get('key') as string;
    if (this.key != null) {
      firebase.database().ref('acounts/'+this.key).on('value', resp => {
        this.acount = resp.val();
      });
    } else {
      this.acount.description = "";
    }
  }

  save() {
    if (this.key != null) {
      firebase.database().ref('acounts/'+this.key).set({description:this.acount.description});
    } else {
      firebase.database().ref('acounts/').push().set({
        description:this.acount.description
      });
    }
    this.navCtrl.pop();
  }
}
