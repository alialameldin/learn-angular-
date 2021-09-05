import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientID:1, firstname:"ali", lastname:"ahmed"},
    {clientID:2, firstname:'omar', lastname:'alam'},
    {clientID:3, firstname:'mohamed', lastname:'amr'},
    {clientID:4, firstname:'samy', lastname:'ziad'},
    {clientID:5, firstname:'shero', lastname:'samy'},
    {clientID:6, firstname:'galal', lastname:'ziad'},
    {clientID:7, firstname:'sara', lastname:'samy'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
