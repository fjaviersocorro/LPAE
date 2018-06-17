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

  constructor(public http: HttpClient, private fb: AngularFireDatabase ) {
    console.log('Hello DbApiProvider Provider');
  }
  getEvents():Observable<any> {
    return this.fb.list('events').valueChanges();
  }

}
