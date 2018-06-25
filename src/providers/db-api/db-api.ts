import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";
/*
  Generated class for the DbApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbApiProvider {

  constructor(public http: HttpClient, private fb: AngularFireDatabase, private afDB: AngularFireDatabase ) {
    console.log('Hello DbApiProvider Provider');
  }
  getEvents():Observable<any> {
    return this.afDB.list('events').valueChanges();
  }
  setNewEvent(event){
    this.afDB.database.ref('events/' + event.id).set(event);
  }
  deleteEvent(event){
    this.afDB.database.ref('events/' + event.id).remove();
  }
  editEvent(event){
    this.afDB.database.ref('events/' + event.id).set(event)
  }
}
