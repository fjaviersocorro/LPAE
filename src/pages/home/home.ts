import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { DbApiProvider} from '../../providers/db-api/db-api'
import{ EventsDetailPage } from '../events-detail/events-detail'
import { NewEventPage } from '../new-event/new-event';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events=[];
  user={};
  pref={};
  terms1="teatro";
  terms2="deporte";
  terms3="cine";
  constructor(public navCtrl: NavController, private dbapi:DbApiProvider,
     private afAuth: AngularFireAuth, private toast: ToastController, public storage:Storage ) {

  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      this.user = data;
    
      // console.log(data.email);
      if (data && data.email && data.uid) {

      }else{
        this.navCtrl.setRoot(LoginPage);
      }
    });
    this.storage.get( "preferences").then(
      (value) => {
      console.log("value")  
      console.log(value)
      if(value!= undefined){
        this.pref=value
      }
      console.log("pref")
      console.log(this.pref)
    });
    // this.pref.forEach(element => {
      
    // });

    this.dbapi.getEvents().subscribe(
      (data)=> this.events = data
    );
    console.log("Eventos" + this.events);
  }
  

  goToDetail(event){
    this.navCtrl.push(EventsDetailPage,event);
  }

  goToNewEvent(){
    this.navCtrl.setRoot(NewEventPage);
  }
  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
