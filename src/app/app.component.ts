import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newProject';
  success_msg = true;

  userObject = {firstName: 'Ali', lastName: 'Ahmed', count: 1}
  isUserLoggedIn = true

  colVal = 2

  superPowerValue = 'angular'
  tax = 10

  username = 'Ali'
  month = 12

  lowerCaseEx = 'ALL TUTORIALS'
  upperCaseEx = 'ali mohamed ali'
  dateEx = Date.now()
  jasonEx = {name : 'Ali', experiance : 10}
  percentageEx = 0.676767
  currencyEx = 255

  newColor = 'black'
  stylecolor = 'green'

  styleClsProp = 'c3'
  conditionClsProp = 'c4'

  isDarkTheme = true

  toggleFunction(){
    this.isDarkTheme = !this.isDarkTheme
  }

  getMethod(){
    return 'c3'
  }

  sayHello(){
    console.log("hello world from angular")
  }
  highlighting(){
    console.log("hello i have been highlighted")
  }
  inputBox(){
    console.log("this is input box")
  }

  contacts = [
    {
      'firstName':'Ali',
      'lastName':'mohamed',
      'contactID': 1234
    },
    {
      'firstName':'Omar',
      'lastName':'alam',
      'contactID': 4567
    },
    {
      'firstName':'Sherouk',
      'lastName':'samy',
      'contactID': 8910
    },
    {
      'firstName':'Ali',
      'lastName':'mohamed',
      'contactID': 1234
    },
    {
      'firstName':'Omar',
      'lastName':'alam',
      'contactID': 4567
    },
    {
      'firstName':'Sherouk',
      'lastName':'samy',
      'contactID': 8910
    },
    {
      'firstName':'Ali',
      'lastName':'mohamed',
      'contactID': 1234
    },
    {
      'firstName':'Omar',
      'lastName':'alam',
      'contactID': 4567
    },
    {
      'firstName':'Sherouk',
      'lastName':'samy',
      'contactID': 8910
    }
  ]
}
