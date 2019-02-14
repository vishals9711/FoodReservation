import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page2',
  templateUrl: './registration-page2.page.html',
  styleUrls: ['./registration-page2.page.scss'],
})
export class RegistrationPage2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoRegister3(){
    this.router.navigate(['registration-page3']);
  }

}
