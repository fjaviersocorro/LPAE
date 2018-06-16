import { Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMap, GoogleSymbol } from '@agm/core/services/google-maps-types';
import { MapsPage } from '../maps/maps';

/**
 * Generated class for the EventsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-detail',
  templateUrl: 'events-detail.html',
})
export class EventsDetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  goToMaps(){
    this.navCtrl.push(MapsPage);
  }
}
