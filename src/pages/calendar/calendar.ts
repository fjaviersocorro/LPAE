import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  currentEvents=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.currentEvents = [
      {
        year: 2018,
        month: 6,
        date: 25,
        description: "Descripción"
      },
      {
        year: 2018,
        month: 6,
        date: 25,
      }
    ];
  }
  onDaySelect($event){
    console.log("iiiih" + $event.description);
  }

}
