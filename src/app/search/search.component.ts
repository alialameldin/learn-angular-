import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = ''
  pricefrom = 0
  priceto = 0
  size = 'M'
  isDirty = true

  constructor(private activatedroute : ActivatedRoute) {
    this.activatedroute.queryParams.subscribe(params =>{
      this.color = params.color
      this.pricefrom = params.pricefrom
      this.priceto = params.priceto
      this.size = params.size
    })
  }

  ngOnInit(): void {
  }

}
