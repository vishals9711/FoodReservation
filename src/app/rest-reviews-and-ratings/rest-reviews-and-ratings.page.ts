import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantreviewsService } from '../service/restaurantreviews.service';

@Component({
  selector: 'app-rest-reviews-and-ratings',
  templateUrl: './rest-reviews-and-ratings.page.html',
  styleUrls: ['./rest-reviews-and-ratings.page.scss'],
})

export class RestReviewsAndRatingsPage {

  passed_id: string;
  reviewData: any;

  constructor(public router: Router, private activatedRoute: ActivatedRoute, public api: APIBackendService, public restReviewService: RestaurantreviewsService) { }


  

  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');

    this.restReviewService.getAllReviewsByRId(this.passed_id).subscribe((data: {}) => {
      this.reviewData = data;
      console.log(this.reviewData);
  });

  }
  
}
