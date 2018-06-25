import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { EventsDetailPage } from '../events-detail/events-detail';
import { DbApiProvider } from '../../providers/db-api/db-api';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  events=[];
  stored=[];
  db=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,
  private dbapi: DbApiProvider) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.storage.forEach( (value, key, index) => {
      this.events.push(value);
    });

  }
  goToDetail(event){
    this.navCtrl.push(EventsDetailPage, event);
  }

}
