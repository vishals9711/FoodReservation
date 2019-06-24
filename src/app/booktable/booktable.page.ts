import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { BookinginfoService } from '../service/bookinginfo.service';
import { LoginAPIService } from '../service/login-api.service';
import { Router } from '@angular/router';
import { Time } from 'highcharts';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.page.html',
  styleUrls: ['./booktable.page.scss'],
})
export class BooktablePage implements OnInit {

  single = [];
  isChartLoaded = false;

  view: any[] = [700, 400];
  passed_id: string;
  RestaurantData: any;
  name: any;
  addre: any;
  cuisine: any;
  img: any;
  bookingId: any;
  tables: any;
  myDate: any;
  date: Date;
  time: Time;
  myTime: any;

  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute, public restaurantAPI: RestaurantinfoService, public api: APIBackendService, public bookingAPI: BookinginfoService, public router: Router, public userLoginApi: LoginAPIService) {
    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
    });

  }
  public userdata = { CId: this.userId };

  ngOnInit() {
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
      this.name = this.RestaurantData[0].RName;
      this.addre = this.RestaurantData[0].RAddress;
      this.cuisine = this.RestaurantData[0].RCuisine;
      this.img = this.RestaurantData[0].RImg;
      this.restaurantAPI.getTable(this.passed_id).subscribe((data: {}) => {
        this.tables = data;

        for (let eachTable of this.tables) {
          let oneTable = {
            "name": eachTable.name,
            "value": eachTable.TId
          };

          this.single.push(oneTable);
        }

        this.isChartLoaded = true;

      });
    });




  }
  change(datePicker) {
    datePicker.open();
  }

  onSelect(event) {
    if (this.userLoginApi.getIsloggedIn() == true) {
      this.date = new Date(this.myDate);
      this.time = new Time(this.myTime);




      this.bookingAPI.create_a_booking_session({ CId: this.userId }).subscribe((data: {}) => {
        this.bookingId = data;

        this.bookingAPI.create_a_session({ SId: this.bookingId.id, TId: event.value, date: this.myDate, time: this.myTime }).subscribe((data: {}) => {


        });

      });
      this.router.navigate(['foodmenu', this.passed_id]);

    }
    else {
      console.log(this.myTime);
      console.log(this.myTime);
      window.alert("Please Log in to book")
    }
  }


}
