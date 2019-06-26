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
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  public allOrder: any;
  public order: any;

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute,
    public restaurantAPI: RestaurantinfoService, public api: APIBackendService,
    public bookingAPI: BookinginfoService, public router: Router,
    public userLoginApi: LoginAPIService, public datePipe: DatePipe) { }

  ngOnInit() {
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.bookingAPI.getAllOrder(this.userId).subscribe((data: {}) => {
      console.log(data);
      this.allOrder = data;
      this.bookingAPI.setOrderData(this.allOrder);
      this.bookingAPI.getOrder(this.userId).subscribe((data: {}) => {
        console.log(data);
        this.order = data;
      });


    });

  }
  onClickOrder(eachOrder) {
    this.router.navigate(['list', eachOrder.OId]);
  }

}
