import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  onPasswordChange() {
    if (this.confirm_password.value == this.password1.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password1(): AbstractControl {
    return this.loginform.controls['password'];
  }
  get confirm_password(): AbstractControl {
    return this.loginform.controls['confirmpassword'];
  }
  loginform=new FormGroup({
	  email:new FormControl('',[Validators.required,Validators.email]),
	  username:new FormControl('',[Validators.required]),
    mobilenumber:new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{10}")]),
    password:new FormControl('',[Validators.required,]),
    confirmpassword:new FormControl('',[Validators.required])
  })

  get email(){
	  return this.loginform.get('email');
  }
  get username(){
	  return this.loginform.get('username');
  }
  get mobilenumber(){
	  return this.loginform.get('mobilenumber');
  }
  get password(){
	  return this.loginform.get('password');
  }
  get confirmpassword(){
	  return this.loginform.get('confirmpassword');
  }

  login(){
	  console.log(this.loginform.value);
  }


  ngOnInit(): void {
  }

}