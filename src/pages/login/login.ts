import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, 
  NavController, NavParams, ToastController} from 'ionic-angular';

import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/user'
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  isUser={}
  public loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
        this.isUser=data;
        if (data && data.email && data.uid) {
          this.navCtrl.setRoot(HomePage);
        }
    });
  }
  login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.navCtrl.setRoot(HomePage);
      }, (err) => {
      this.loading.dismiss().then( ()=>{
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "OK",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
      });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      });
    this.loading.present();
}


logout() {
  this.afAuth.auth.signOut();
  this.navCtrl.setRoot(LoginPage)
}

SignUp() {
  this.navCtrl.push(RegisterPage);
}

  
}
