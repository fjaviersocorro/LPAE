import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { FavoritesPage } from '../favorites/favorites';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user={}
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private afAuth: AngularFireAuth,  private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.afAuth.authState.subscribe(data => {
      this.user = data;
    
      // console.log(data.email);
      if (data && data.email && data.uid) {

      }else{
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }

  logout() {
    this.toast.create({
      message: `See you soon`,
      duration: 1000
    }).present();
    this.afAuth.auth.signOut();
  } 
  goToFavorites(){
    this.navCtrl.setRoot(FavoritesPage);
  }

}
