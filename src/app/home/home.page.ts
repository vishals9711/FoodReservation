import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public restaurantName: string = '';
  public restaurantAddress: string = '';
  public allRestaurantData:any;

  constructor(public modalController: ModalController, public api: APIBackendService,
     private router: Router, public restaurantAPI: RestaurantinfoService) {

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



    ngOnInit() {

    }
}

