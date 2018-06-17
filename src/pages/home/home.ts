import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { DbApiProvider} from '../../providers/db-api/db-api'
import{ EventsDetailPage } from '../events-detail/events-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events=[];
  constructor(public navCtrl: NavController, private dbapi:DbApiProvider) {

  }
  goToDetail(event){
    this.navCtrl.push(EventsDetailPage,event);
  }
  ionViewWillLoad(){
    this.dbapi.getEvents().subscribe(
      (data)=> this.events = data
    );
    console.log("Eventos" + this.events);
  }
}
