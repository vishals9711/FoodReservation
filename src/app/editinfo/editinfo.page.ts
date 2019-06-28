import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { EditinfoService } from '../service/editinfo.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage implements OnInit {

  public registerdata = { email: "", opassword: "", npassword: "" };

  constructor(public modalController: ModalController,
    private router: Router, public registerAPI: EditinfoService,
    private storage: Storage, public events: Events)
    {
      
    }

  ngOnInit() {
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
