import { Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DbApiProvider } from '../../providers/db-api/db-api'
import { EventsPage } from '../events/events';
import { MapsAPILoader } from '@agm/core';
/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {


  ////agm variables
  public latitude: number;
  public longitude: number;
  public searchControl:FormControl;
  public zoom: number;
  public radius:number;
  public map;
  /////
  title:string;
  description:string;
  content:string;
  location:string;
  tag:string;
  event={}

  myForm: FormGroup;
  imageId: string;
  url:string;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'fjaviersocorro', uploadPreset: 'LPAEvents' })
    );

  loading:any;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
  private dbapi:DbApiProvider,  private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone,) {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      this.imageId = res.public_id;
      this.url=res.url;
      return { item, response, status, headers };
  };
  this.myForm = this.createMyForm();
  }
  ngOnInit() {
    //set google maps defaults
     
    this.zoom = 13;
    this.latitude = 28.1173563;
    this.longitude = -15.4746366;
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }
  uploadImage(){
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
         let res: any = JSON.parse(response);
         this.url=res.url;
         console.log(res , this.url);
     }
     this.uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
      };
  }
  private createMyForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      tag:['',Validators.required],
      lat:['',Validators.required],
      ln:['',Validators.required],
      

    });
  }
  save(){
    this.event={
      id: Date.now(),
      title:this.title,
      description:this.description,
      image: this.url,
      tag: this.tag,
      latitude: this.latitude,
      longitude: this.longitude,
      
    }
    this.dbapi.setNewEvent(this.event);
    this.navCtrl.setRoot(EventsPage);

  }


}
