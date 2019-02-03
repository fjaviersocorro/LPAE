import { Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { Storage } from '@ionic/storage';

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
  private events=[];
  private favorite:boolean;
  private pref:{
    CYT:0,
    ARTE:0,
    DEPORTE:0,
    OTROS:0
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
  public preferences: Storage) {
    
    this.storage.get( "preferences").then((value) => {
      this.pref = value;
      if(value!=undefined){
        this.pref=value
      }else{
        this.pref={
          CYT:0,
          ARTE:0,
          DEPORTE:0,
          OTROS:0
        }
      }
    });
    
  }

  ionViewDidLoad() {
    console.log(this.navParams.data.title);
    this.event = this.navParams.data;
    this.isFav(this.event);
    
  }
  goToMaps(event){
    this.navCtrl.push(MapsPage, event);
  }
  favoriteEvent(event){
    console.log("event",event);
    
    
    // this.storage.get( "preferences").then((value) => {
    //   this.pref = value;
    // });
    
    console.log("PREFERNCES1");
    console.log(this.pref);
    
    if(event.tag=="CYT"){
      this.pref.CYT+=1;
    }else{
      if(event.tag=="ARTE"){
        this.pref.ARTE+=1;
      }else{
        if(event.tag=="DEPORTE"){
          this.pref.DEPORTE+=1;
        }else{
        
            this.pref.OTROS+=1;
         
        }
      }
    }
    this.storage.set("preferences",this.pref);
    this.storage.set(event.id.toString(), event);
    console.log("PREFERNCES2");
    console.log(this.pref);

    this.favorite=true;
    this.getFavorite(event);

  }
  unfavoriteEvent(event){
    this.storage.remove(event.id.toString());
    this.favorite=false;
    this.getFavorite(event);
  }
  getFavorite(event){
    this.storage.get(event.id.toString()).then((val) => {
      console.log("value is: " , val);
    });
    console.log("storage");
    console.log(this.storage);
  }
  isFav(event) {
    this.storage.get(event.id.toString()).then((value) => {
      value ? this.favorite = true : this.favorite = false
    }).catch(() => this.favorite = false);
  }
  clear(){
    this.storage.forEach( (value, key, index) => {
      this.storage.remove(key);
    });
    this.storage.remove("preferences");
  }
}
