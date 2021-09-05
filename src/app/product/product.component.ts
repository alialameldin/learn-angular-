import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productid = 0
  photoid = 0

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      const intervalue = params
      this.productid = intervalue.productid
      this.photoid = intervalue.photoid
    });
  }

  ngOnInit(): void {
  }

}
