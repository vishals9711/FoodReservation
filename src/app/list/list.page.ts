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
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  public allOrder: any;
  public passed_id: any;

  constructor(private storage: Storage, public events: Events, private activatedRoute: ActivatedRoute,
    public restaurantAPI: RestaurantinfoService, public api: APIBackendService,
    public bookingAPI: BookinginfoService, public router: Router,
    public userLoginApi: LoginAPIService, public datePipe: DatePipe) { }

  ngOnInit() {
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.isLoggedIn = this.userLoginApi.getIsloggedIn();
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('passed_id');


    this.allOrder = this.bookingAPI.getOrderData();
    console.log(this.allOrder);

  }

}
