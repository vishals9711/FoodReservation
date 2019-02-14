import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { RegistrationPage1Page } from '../registration-page1/registration-page1.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController,private router:Router){
    //this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss:true
    });
    return await modal.present();
  }

  
  gotoRegister1() {
    this.router.navigate(['registration-page1']);
  }
  
}
