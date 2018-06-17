import { Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public radius:number;
  public map;
  

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public navCtrl: NavController, public navParams: NavParams
  ) {}
 
  
  ngOnInit() {
    //set google maps defaults
     
    this.zoom = 17;
    this.latitude = this.navParams.data.latitude;
    this.longitude = this.navParams.data.longitude;
    //this.radius =1000;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["establishment"],
      });
      var geolocation = {
        lat: this.latitude,
        lng: this.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: 500
      });
      autocomplete.setBounds(circle.getBounds());
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          //this.radius = 1000;
          this.zoom = 17;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.radius=1000;
        this.zoom = 12;
      });
    }
  }
}
