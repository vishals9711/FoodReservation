import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page3',
  templateUrl: './registration-page3.page.html',
  styleUrls: ['./registration-page3.page.scss'],
})
export class RegistrationPage3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  gotoLanding(){
    this.router.navigate(['home']);
  }
}
