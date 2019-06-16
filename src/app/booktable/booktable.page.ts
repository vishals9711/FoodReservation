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

  onSelect(event) {

    this.bookingAPI.create_a_booking_session({ CId: this.userId }).subscribe((data: {}) => {
      this.bookingId = data;

      this.bookingAPI.create_a_session({ SId: this.bookingId.id, TId: event.value }).subscribe((data: {}) => {


      });

    });
    this.router.navigate(['foodmenu', this.passed_id]);

  }

}
