import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans-type',
  templateUrl: './loans-type.component.html',
  styleUrls: ['./loans-type.component.scss']
})

export class LoansTypeComponent implements OnInit {

  loanForm!: FormGroup;

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {

    let users = new FormArray([
      new FormControl('ABC'),
      new FormControl('tutorial')
    ])
    //console.log(users.value)

    //form
    this.loanForm =  this.fb.group({
      loanName : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      loanType : new FormControl('', [Validators.required]),
      loanDescription: new FormControl(''),
      'users' : new FormArray([
        this.fb.group({
          name : new FormControl('ali'),
          age : new FormControl('23'),
          dept : new FormControl('computer'),
        })
      ]),
    })

    // without[get("loanName")?.] it wil give if total form status is valid or invalid
    this.loanForm.get("loanName")?.statusChanges.subscribe(data => {
      console.log(data);
    })

    /*this.loanForm.valueChanges.subscribe(data => {
      console.log(data)
    })*/
  }

  get users(): FormArray{
    return this.loanForm.get('users') as FormArray
  }
  adduser(){
    let userArr = this.loanForm.get('users') as FormArray
    let newUser = this.fb.group({
      name: '',
      age: '',
      dept: '',
    })
    userArr.push(newUser)
  }
  removeuser(i){
    let arr = this.loanForm.get('users') as FormArray
    arr.removeAt(i);
  }
  assignfunct(i){
    let arr = this.loanForm.get('users') as FormArray
    let values = arr.value
    if(arr.value[i].age > 55){
      arr.value[i].dept = 'CSE';
    }
    else{
      arr.value[i].dept = 'electrical';
    }
    this.users.setValue(arr.value)
  }

  addLoan(){
    //console.log(this.loanForm.value)
    //console.log(this.loanForm.get('loanType')?.value)
    if(this.loanForm.valid){

    }
    if(this.loanForm.invalid){

    }
  }
  resetForm(){
    this.loanForm.reset();
  }

}
