import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userRegisterForm:FormGroup
  constructor(){
    this.userRegisterForm=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

}
