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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsPage } from '../pages/maps/maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventsDetailPage,
    LoginPage,
    ProfilePage,
    MapsPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS-Jm_Qp3vce6Mr3Eh1KbOnLhKkvZZeOg',
      libraries: ["places"],
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    EventsDetailPage,
    LoginPage,
    ProfilePage,
    MapsPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
