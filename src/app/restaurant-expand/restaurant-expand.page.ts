import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';


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
  passed_id: string;
  RestaurantData: any;
  name: any;
  addre: any;
  cuisine: any;
  img: any;
  rate:any;



  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, public restaurantAPI: RestaurantinfoService) { }



  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');


    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
   
    this.name = this.RestaurantData[0].RName;
    this.addre = this.RestaurantData[0].RAddress;
    this.cuisine = this.RestaurantData[0].RCuisine;
    this.rate = this.RestaurantData[0].RRating;
    this.img = this.RestaurantData[0].RImg;
    });

    

  }
  goToMenu() {
    this.router.navigate(['foodmenu', this.passed_id]);
    
  }
  booktable(){
    this.router.navigate(['booktable',this.passed_id]);
  }




}
