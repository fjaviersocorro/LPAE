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
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsPage } from '../pages/maps/maps';
import { CalendarPage } from '../pages/calendar/calendar';
import { DbApiProvider } from '../providers/db-api/db-api';
import { NewEventPage } from '../pages/new-event/new-event';
import { FileUploadModule } from 'ng2-file-upload';


import { MAPS_KEY, FB_CONFIG } from '../keys'
import { RegisterPage } from '../pages/register/register';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { CategoryPipe } from '../pipes/category/category';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { IonicStorageModule } from '@ionic/storage';
import { FavoritesPage } from '../pages/favorites/favorites';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventsDetailPage,
    LoginPage,
    ProfilePage,
    MapsPage,
    CalendarPage,
    NewEventPage,
    RegisterPage,
    SearchPipe,
    SortPipe,
    CategoryPipe,
    EditEventPage,
    FavoritesPage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: MAPS_KEY,
      libraries: ["places"],
    }),
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
    CalendarModule,
    AngularFireModule.initializeApp(FB_CONFIG,'lpae'),
    AngularFireDatabaseModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()

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
    CalendarPage,
    NewEventPage,
    RegisterPage,
    EditEventPage,
    FavoritesPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbApiProvider,
    DbApiProvider
  
      ]
})
export class AppModule {}
