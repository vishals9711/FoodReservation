import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData: any;


  constructor(public modalController: ModalController, public api: APIBackendService,
    private router: Router, public restaurantAPI: RestaurantinfoService,
    private storage: Storage, public events: Events) {


    this.restaurantAPI.getAllRestaurants().subscribe((data: {}) => {
      this.allRestaurantData = data;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss: true
    });
    return await modal.present();
  }

  onClickRestaurant(eachRest: any) {
    console.log("Hoem pagasdasdads")
    console.log(eachRest);
    this.router.navigate(['restaurant-expand', eachRest.RId]);
  }
  ngOnInit() {

  }
}

