import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { APIBackendService } from '../service/apibackend.service';
import { RestaurantinfoService } from '../service/restaurantinfo.service';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.page.html',
  styleUrls: ['./booktable.page.scss'],
})
export class BooktablePage implements OnInit {

  single = [
    {
      "name": "Table 1 (8 Seats)",
      "value": 1118
    },
    {
      "name": "Table 2 (5 Seats)",
      "value": 1115
    },
    {
      "name": "Table 3 (7 Seats)",
      "value": 1117
    }
  ];
  
  
  view: any[] = [700, 400];
  passed_id: string;
  RestaurantData:any;
  name: any;
  addre: any;
  cuisine: any;
  img: any;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private storage: Storage,public events: Events,private activatedRoute: ActivatedRoute,public restaurantAPI: RestaurantinfoService,public api: APIBackendService) { }

  ngOnInit() {
    this.passed_id = this.activatedRoute.snapshot.paramMap.get('r_id');
    console.log(this.passed_id)
    this.restaurantAPI.getRestaurant(this.passed_id).subscribe((data: {}) => {
      this.RestaurantData = data;
      this.name = this.RestaurantData[0].RName;
    this.addre = this.RestaurantData[0].RAddress;
    this.cuisine = this.RestaurantData[0].RCuisine;
    this.img = this.RestaurantData[0].RImg;
      console.log(data)
    });
  }
  
  onSelect(event) {
    console.log(event);

  }


  ionViewDidLoad() {}

  myChart = HighCharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  });

  
}
