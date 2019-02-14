import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams, private modalController: ModalController,private router:Router) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async userLogin(){
    await this.modalController.dismiss();
  }

  gotoRegister1() {
    this.modalController.dismiss();
    this.router.navigate(['registration-page1']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
