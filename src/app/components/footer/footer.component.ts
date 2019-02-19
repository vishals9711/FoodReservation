import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigate(['/home']);
    console.log("Home Page");
  }
  gotoFav() {
    this.router.navigate(['favpage']);
    console.log("Fav Page");
  }
}
