import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public restaurantName: string = '';
  public restaurantAddress: string = '';

  constructor(public modalController: ModalController, public api: APIBackendService,
     private router: Router, public restaurantAPI: RestaurantinfoService, 
     private storage: Storage, public events: Events) {
      
        this.storage.get('name').then((userval) => {
          //this.restaurantName = userval;
        });

        this.storage.get('email').then((emailval) => {
          //this.restaurantDesc = emailval;
        });

        this.restaurantAPI.getAllRestaurants().subscribe((data: {}) => {
          this.storage.get('restaurantName').then((RName) => {
            this.restaurantName = RName;
          });
          
          this.storage.get('restaurantAddress').then((RAddress) => {
            this.restaurantAddress = RAddress;
          });
    
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

