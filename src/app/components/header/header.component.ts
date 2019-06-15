import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { LoginAPIService } from '../../service/login-api.service';
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
  public userData = { email: '', password: '' };

  constructor(public modalController: ModalController, private storage: Storage,
     public actionSheetController: ActionSheetController, public events: Events, public loginAPI: LoginAPIService) {
    events.subscribe('user:created', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.storage.get('isLoggedIn').then((val) => {
        this.isLoggedIn = val;
        this.storage.get('name').then((userval) => {
          this.userName = userval;
        });
        console.log('header: "isLoggedIn"',this.storage.get('isLoggedIn'));
        console.log('header: isLoggedIn',this.isLoggedIn);

        this.storage.get('email').then((emailval) => {
          this.userEmail = emailval;
        });

      });
    });


    //  this.loginAPI.authenticateUser(this.userData).subscribe((data: {}) => { 
    //    console.log("--------------------");
    //    this.userName = data[0].CName;
    //    console.log(data[0].CName);
    //  });




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
