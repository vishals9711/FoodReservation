import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { BookinginfoService } from '../service/bookinginfo.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.page.html',
  styleUrls: ['./booktable.page.scss'],
})
export class BooktablePage implements OnInit {

  single = [
    {
      "name": "Table 1 (8 Seats)",
      "value": 1118
    },
    {
      "name": "Table 2 (5 Seats)",
      "value": 1115
    },
    {
      "name": "Table 3 (7 Seats)",
      "value": 1117
    }
  ];

  view: any[] = [700, 400];
  passed_id: string;
  RestaurantData: any;
  name: any;
  addre: any;
  cuisine: any;
  img: any;
  bookingId: any;

  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId : number;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute, public restaurantAPI: RestaurantinfoService, public api: APIBackendService , public bookingAPI:BookinginfoService) {
    events.subscribe('user:created', () => {
      this.storage.get('isLoggedIn').then((val) => {
        this.isLoggedIn = val;
        this.storage.get('name').then((userval) => {
          this.userName = userval;
        });
        this.storage.get('email').then((emailval) => {
          this.userEmail = emailval;
        });
        this.storage.get('userId').then((idval) => {
          this.userId = idval;
        });
      });
    });

  }
  public userdata = { CId: this.userId};

  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');

    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
      this.name = this.RestaurantData[0].RName;
      this.addre = this.RestaurantData[0].RAddress;
      this.cuisine = this.RestaurantData[0].RCuisine;
      this.img = this.RestaurantData[0].RImg;
    });
  }

  onSelect(event) {
    console.log(event.value)
    this.bookingAPI.create_a_booking_session( { CId: this.userId}).subscribe((data: {}) => {
      this.bookingId = data;
      console.log(data)
      console.log("-----------------------------------")
      console.log(this.bookingId.id)
      this.bookingAPI.create_a_session( { SId: this.bookingId.id,TId:event.value}).subscribe((data: {}) => {
        console.log("All okay")
  
      });

    });
 
  }

}
