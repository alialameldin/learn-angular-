import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-delete-customers',
  templateUrl: './delete-customers.component.html',
  styleUrls: ['./delete-customers.component.scss']
})
export class DeleteCustomersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.usersService.deleteUser(1).subscribe(data => {
      console.log("user deleted successfully"+data),
        (err: string) => {
        console.log("unable to delete user"+err)}
    })
  }
}
