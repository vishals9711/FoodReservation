import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // "value" passed in componentProps
  @Input() value: number;

  constructor(navParams: NavParams, private modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async userLogin(){
    await this.modalController.dismiss();
  }

}
