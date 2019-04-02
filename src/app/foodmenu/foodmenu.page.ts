import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { FoodinfoService } from '../service/foodinfo.service';
import { ToastController } from '@ionic/angular';


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

  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, public restaurantAPI: FoodinfoService, private toastCtrl: ToastController) { }


  addItem() {
    this.noOfItems++;
  }

  removeItem() {
    this.noOfItems--;
  }


  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    
    this.restaurantAPI.getFood(this.passed_id).subscribe((data: {}) => {
      this.food_data = data;
      
    });




  }
  async buyItem(food_data) {
    let toast = await this.toastCtrl.create({
      message: 'Added : ${food_data.name}'
    });
    toast.present();
  }

  toggleSection(index) {
    this.food_data

  }

  toggleItem(index, childIndex) {

  }
}
