import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

import { ContasAddPage } from '../contas-add/contas-add';

/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  acounts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /**
     * busca no bd todas as contas
     */
    firebase.database().ref('acounts/').on('value', resp => {
      this.acounts = [];
      // Percore os registros e seta no array de visualização
      resp.forEach(it => {
        let item = it.val();
        item.key = it.key;
        this.acounts.push(item);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

  addAcount() {
    this.navCtrl.push(ContasAddPage);
  }

  edtAcount(key) {
    this.navCtrl.push(ContasAddPage, {'key':key});
  }

  delete(acount) {
    firebase.database().ref('acounts/'+acount.key).remove();
  }
}