import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { EditinfoService } from '../service/editinfo.service';
import { LoginAPIService } from '../service/login-api.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage implements OnInit {
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public userPhone: string = '';
  public userId: any;
  public userData = { email: '', password: '' };

  public registerdata = { email: "", opassword: "", npassword: "" };

  constructor(public modalController: ModalController,
    private router: Router, public registerAPI: EditinfoService,
    private storage: Storage, public events: Events, public loginAPI: LoginAPIService)
    {
      events.subscribe('user:created', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        if (this.loginAPI.getIsloggedIn() == true) {
          this.isLoggedIn = this.loginAPI.getIsloggedIn();
          this.userName = this.loginAPI.getName();
          console.log('header: isLoggedIn', this.isLoggedIn);
          this.userEmail = this.loginAPI.getEmail();
         
        }
  
      });
    }

  ngOnInit() {
    if (this.loginAPI.getIsloggedIn() == true) {
      this.isLoggedIn = this.loginAPI.getIsloggedIn();
      this.userName = this.loginAPI.getName();
      console.log('header: isLoggedIn', this.isLoggedIn);
      this.userEmail = this.loginAPI.getEmail();
      this.userId = this.loginAPI.getUserId();

      

    }
  }
  
  Register() {
    this.registerAPI.createotp(this.registerdata).subscribe((data: {}) => {
      this.storage.set('userId', data['id']);
      this.storage.set('email', data['email']);
      this.storage.set('opassword', data['opassword']);
      this.storage.set('npassword', data['npassword']);
    //  this.storage.set('isLoggedIn', true);
      
      this.router.navigate(['/home']);

    });
  }

 
}
