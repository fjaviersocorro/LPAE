import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbApiProvider } from '../../providers/db-api/db-api';
import { EventsDetailPage } from '../events-detail/events-detail';
import { NewEventPage } from '../new-event/new-event';
import { AngularFireDatabase } from 'angularfire2/database';
import { EditEventPage } from '../edit-event/edit-event';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events=[];
  descending: boolean = false;
  order: number;
  column: string = 'title';
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbapi:DbApiProvider,
  private afDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.dbapi.getEvents().subscribe(
      (data)=> this.events = data
    );
  }
  goToDetail(event){
    this.navCtrl.push(EventsDetailPage,event);
  }

  goToNewEvent(){
    this.navCtrl.push(NewEventPage);
  }

  deleteEvent(event){
    console.log(event);
    event.title="meeeeeeeeh"
    this.afDB.database.ref('events/' + event.id).remove();
    ///
  }
  editEvent(event){
    this.navCtrl.push(EditEventPage, event);
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
