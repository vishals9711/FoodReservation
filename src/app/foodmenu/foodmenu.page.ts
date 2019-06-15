import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController } from '@ionic/angular';
import { BookinginfoService } from '../service/bookinginfo.service';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.page.html',
  styleUrls: ['./foodmenu.page.scss'],
})
export class FoodmenuPage implements OnInit {

  automaticClose = false;
  passed_id: string;
  food_data: any;
  noOfItems = 0;
  quantity: any;
  cartData = [];
  total: number = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userId = 2;

  constructor(public router: Router, private activatedRoute: ActivatedRoute, public restaurantAPI: FoodinfoService, private toastCtrl: ToastController, public api: APIBackendService, public bookingAPI: BookinginfoService, public events: Events, private storage: Storage) {
    events.subscribe('user:created', () => {
      this.storage.get('userId').then((idval) => {
        this.userId = idval;
      });
      this.storage.get('email').then((emailval) => {
        this.userEmail = emailval;
      });
    });

  }

  displayQty(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId) {
        return eachItem.qty;
      }
    }
  }

  addItem(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId) {
        eachItem.qty++;
        this.total += eachItem.price;

        break;
      }
    }
  }

  removeItem(itemId: number) {
    for (let eachItem of this.cartData) {
      if (eachItem.ItemID == itemId && eachItem.qty > 0) {
        eachItem.qty--;
        this.total -= eachItem.price;
        break;
      }
    }
  }


  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    this.restaurantAPI.getFood(this.passed_id).subscribe((data: {}) => {
      this.food_data = data;

      for (let eachItem of this.food_data) {
        let obj = {
          ItemID: eachItem.ItemID,
          price: eachItem.Rate,
          qty: 0,
          userid: this.userId,
          r_id: this.passed_id,
          Name: eachItem.Name,
          Photo: eachItem.Fimage
        };

        this.cartData.push(obj);
      }
      console.log(this.cartData);
    });
    this.food_data[0].open = true;
  }
  async buyItem(food_data) {
    let toast = await this.toastCtrl.create({
      message: 'Added : ${food_data.name}'
    });
    toast.present();
  }

  toggleSection(index) {
    this.food_data[index].open = !this.food_data[index].open;

    if (this.automaticClose && this.food_data[index].open) {
      this.food_data.filter((item, itemIndex) => itemIndex != index).map(item => item.open = false);
    }

  }

  toggleItem(index, childIndex) {
    this.food_data[index].children[childIndex].open = !this.food_data[index].children[childIndex].open;

  }
  order() {
    this.cartData.unshift({ 'total': this.total });
    this.restaurantAPI.setCartData(this.cartData);

    this.router.navigate(['cart-page']);
    // this.bookingAPI.createOrder(this.cartData).subscribe((data: {}) => {
    // console.log("All okay") 
    // });

  }
}
