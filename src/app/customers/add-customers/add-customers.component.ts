import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {

  isUserAdded : boolean = false
  firstname: string = ''
  terms: boolean = false
  customerType: string = ''
  description: string = ''

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  addCustomer(formValue : NgForm){
    console.log(formValue.value)
    const postbody = {
      title : formValue.value.firstname,
      body : formValue.value.description
    };
    this.usersService.addUser(postbody).subscribe(data => {
      this.isUserAdded = true,
        (err: any) => {
        console.log("unable to add user")
      }
    })
  }

  setfunct(formValue : NgForm){
    let userDetails = {
      firstname : 'omar',
      terms : false,
      customerType : '1',
      description : 'this is description field',
    }
    formValue.setValue(userDetails);
  }
  resetfunct(formValue : NgForm){
    formValue.reset();
  }

}
