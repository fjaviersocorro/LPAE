import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ EventsDetailPage } from '../events-detail/events-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  goToDetail(){
    this.navCtrl.setRoot(EventsDetailPage);
  }
}
