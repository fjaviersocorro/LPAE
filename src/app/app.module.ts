import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { EventsDetailPage } from '../pages/events-detail/events-detail';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { AgmCoreModule } from '@agm/core';
import { FullCalendarModule } from 'ng-fullcalendar';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'ionic3-calendar-en';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsPage } from '../pages/maps/maps';
import { CalendarPage } from '../pages/calendar/calendar';
import { DbApiProvider } from '../providers/db-api/db-api';

var config = {
  apiKey: "AIzaSyD9jmDBmX3Cjj290UtgHYyakPquvN0OieE",
  authDomain: "lpae-e7493.firebaseapp.com",
  databaseURL: "https://lpae-e7493.firebaseio.com",
  projectId: "lpae-e7493",
  storageBucket: "lpae-e7493.appspot.com",
  messagingSenderId: "609348079574"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventsDetailPage,
    LoginPage,
    ProfilePage,
    MapsPage,
    CalendarPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS-Jm_Qp3vce6Mr3Eh1KbOnLhKkvZZeOg',
      libraries: ["places"],
    }),
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
    CalendarModule,
    AngularFireModule.initializeApp(config,'lpae'),
    AngularFireDatabaseModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    EventsDetailPage,
    LoginPage,
    ProfilePage,
    MapsPage,
    CalendarPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbApiProvider,
    DbApiProvider,
      ]
})
export class AppModule {}
