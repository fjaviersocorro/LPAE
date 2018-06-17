import { Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMap, GoogleSymbol } from '@agm/core/services/google-maps-types';
import { MapsPage } from '../maps/maps';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DbApiProvider} from '../../providers/db-api/db-api'


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
  private event={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log(this.navParams.data.title);
    this.event = this.navParams.data;
  }
  goToMaps(event){
    this.navCtrl.push(MapsPage, event);
  }
}
