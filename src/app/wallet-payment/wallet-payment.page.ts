import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallet-payment',
  templateUrl: './wallet-payment.page.html',
  styleUrls: ['./wallet-payment.page.scss'],
})
export class WalletPaymentPage implements OnInit {

  orderid: any;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.orderid = this.activatedRoute.snapshot.paramMap.get('passed_id');
    console.log('orderid', this.orderid);

    
  }

}
