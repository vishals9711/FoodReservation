import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController } from '@ionic/angular';
import { BookinginfoService } from '../service/bookinginfo.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import { LoginAPIService } from '../service/login-api.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {
  cartData: any;
  cart = [];
  final_order = [];
  passed_id: string;
  food_data: any;
  noOfItems = 0;
  quantity: any;
  total: number = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId: any;
  r_id: any;
  orderid: any;
  countDown;
  counter = 1200;
  tick = 1000;
  public showCounter: boolean = false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute, public restaurantAPI: FoodinfoService, 
    private toastCtrl: ToastController, public api: APIBackendService, public bookingAPI: BookinginfoService, 
    public events: Events, private storage: Storage, public userLoginApi: LoginAPIService) {
    events.subscribe('user:created', () => {
      this.userId = this.userLoginApi.getUserId();
      this.userEmail = this.userLoginApi.getEmail();
    });
  }

  ngOnInit() {
    this.userId = this.userLoginApi.getUserId();
    this.userEmail = this.userLoginApi.getEmail();
    this.cartData = this.restaurantAPI.getCartData();

    this.passed_id = this.cartData[1].r_id;
    for (let eachItem of this.cartData) {
      if (eachItem.qty > 0) {
        this.cart.push(eachItem);

      }
    }

    this.total = this.cartData[0].total;
    for (let eachItem of this.cart) {
      let obj = {
        ItemID: eachItem.ItemID,
        price: eachItem.price,
        qty: eachItem.qty,

      };
      this.r_id = eachItem.r_id;

      this.final_order.push(obj);
    }


    this.final_order.unshift({ total: this.total });
    this.final_order.unshift({ userid: this.userId });
    this.final_order.unshift({ r_id: this.r_id });



  }
  order() {

    this.bookingAPI.createOrder(this.final_order).subscribe((data: {}) => {

      this.orderid = data;

      this.countDown = Observable.timer(0, this.tick)
        .take(this.counter)
        .map(() => --this.counter)
      // this.router.navigate(['profile', this.orderid.id]);
      this.showCounter = true;
    });

  }

}
@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}
