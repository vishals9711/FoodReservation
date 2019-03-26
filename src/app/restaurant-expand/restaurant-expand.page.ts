import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';



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



  constructor(public router: Router) { 

    
  }

  
  
  

  ngOnInit() {
    
    
    //this.restDetails = this.activatedRoute.snapshot.paramMap.get('restdetails');
    //console.log(this.restDetails);

  }

  goToMenu() {
    this.router.navigate(['foodmenu']);
  }

}
