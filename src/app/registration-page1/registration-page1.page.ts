import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page1',
  templateUrl: './registration-page1.page.html',
  styleUrls: ['./registration-page1.page.scss'],
})
export class RegistrationPage1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRegister2(){
    this.router.navigate(['registration-page2']);
  }

}
