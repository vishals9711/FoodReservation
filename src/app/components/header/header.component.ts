import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  constructor(public modalController: ModalController, private storage: Storage,
     public actionSheetController: ActionSheetController, public events: Events) {
    events.subscribe('user:created', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.storage.get('isLoggedIn').then((val) => {
        this.isLoggedIn = val;
        this.storage.get('name').then((userval) => {
          this.userName = userval;
        });

        this.storage.get('email').then((emailval) => {
          this.userEmail = emailval;
        });

      });
    });

  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      backdropDismiss: true
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Cart',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Logout',
        icon: 'share',
        role: 'destructive',
        handler: () => {
          this.logoutUser();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  public logoutUser() {
    this.storage.get('isLoggedIn').then((val) => {
      this.storage.remove('userId');
      this.storage.remove('email');
      this.storage.remove('name');
      this.storage.remove('isLoggedIn');

      this.isLoggedIn = false;
      this.userName = '';
      this.userEmail = '';
    });
  }

}
