import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantreviewsService } from '../service/restaurantreviews.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-rest-reviews-and-ratings',
  templateUrl: './rest-reviews-and-ratings.page.html',
  styleUrls: ['./rest-reviews-and-ratings.page.scss'],
})

export class RestReviewsAndRatingsPage {

  passed_id: string;
  reviewData: any;
  inputRating: any = 0;
  public isLoggedIn: boolean = false;
  public userName: string = '';
  public userEmail: string = '';
  public newReviewData: any = { restId: "", restReview:  "", userRating: this.inputRating , userId: ""};



  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, public restReviewService: RestaurantreviewsService,
    public events: Events, private storage: Storage) { 

      events.subscribe('user:created', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.storage.get('isLoggedIn').then((val) => {
          this.isLoggedIn = val;
          this.storage.get('name').then((userval) => {
            this.userName = userval;
          });
    
          this.storage.get('email').then((emailval) => {
            this.userEmail = emailval;
          });
          this.storage.get('userId').then((idval) => {
            this.newReviewData.userId = idval;
          });
    
        });
      });

      
      

    }



  rateUp() {
    if(this.inputRating!=5)
      this.inputRating++;
  }

  rateDown() {
    if(this.inputRating!=0)
      this.inputRating--;
    }


    
    submitReview() {

      this.newReviewData.restId = this.passed_id;
      this.newReviewData.userRating = this.inputRating;
      this.restReviewService.createReview(this.newReviewData).subscribe((data: {}) => {

      });
    }

    

  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');

    this.restReviewService.getAllReviewsByRId(this.passed_id).subscribe((data: {}) => {
      this.reviewData = data;
      console.log(this.reviewData);

  });
  


  }

  
 

  
  
}
