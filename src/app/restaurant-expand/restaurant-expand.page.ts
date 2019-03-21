import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-restaurant-expand',
  templateUrl: './restaurant-expand.page.html',
  styleUrls: ['./restaurant-expand.page.scss'],
})
export class RestaurantExpandPage implements OnInit {


  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 10

  }

  constructor(public router: Router) { }

  goToMenu() {
    this.router.navigate(['foodmenu']);
  }
  

  ngOnInit() {
  }

}
