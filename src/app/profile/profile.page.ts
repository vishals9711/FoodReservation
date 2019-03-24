import { Component, OnInit } from '@angular/core';
import { LoginAPIService } from '../service/login-api.service';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';

  constructor(private storage: Storage, public loginAPI: LoginAPIService, public events: Events) {
    events.subscribe('user:created', () => {
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
    console.log(this.userEmail);
  }

  ngOnInit() {
    console.log(this.userName)
    console.log("Profile Page");
  }

}
