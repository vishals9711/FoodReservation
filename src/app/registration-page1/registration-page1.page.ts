import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-registration-page1',
  templateUrl: './registration-page1.page.html',
  styleUrls: ['./registration-page1.page.scss'],
})
export class RegistrationPage1Page implements OnInit {
  public registerdata = { name: "", email: "", phone: "", password: "", dob: "" };

  constructor(private router: Router, public registerAPI: RegistrationService, private storage: Storage, public events: Events) { }

  ngOnInit() {
  }
  Register() {
    this.registerAPI.createRegistration(this.registerdata).subscribe((data: {}) => {
      this.storage.set('userId', data['id']);
      this.storage.set('email', data['email']);
      this.storage.set('name', data['name']);
      this.storage.set('isLoggedIn', true);
      this.events.publish('user:created');
      this.router.navigate(['/home']);

    });
  }

}
