import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data = [
    {
      name : "person 1",
      age : "18",
      email : "person1@gmail.com"
    },
    {
      name : "person 2",
      age : "18",
      email : "person1@gmail.com"
    },
    {
      name : "person 3",
      age : "18",
      email : "person1@gmail.com"
    }
  ];
  userForm;
  constructor(){
    this.userForm = new FormGroup(
      {
        'name' : new FormControl(),
        'age' : new FormControl(),
        'email' : new FormControl(),
      }
    )
    }
    formSubmit(){
      console.log(this.userForm.value);
      this.data.push(this.userForm.value);
  }
}
