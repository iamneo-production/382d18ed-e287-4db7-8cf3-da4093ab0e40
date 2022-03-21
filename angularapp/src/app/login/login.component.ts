import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service : UserService ,private _router :Router) { }
 msg='';
  
  // getting the form control elements
  get password1(): AbstractControl {
    return this.loginform.controls['password'];
  }
 
  loginform=new FormGroup({
	  emailId:new FormControl('',[Validators.required,Validators.email]),
	 password:new FormControl('',[Validators.required,]),
   
  })

  get emailId(){
	  return this.loginform.get('emailId');
  }
 
  get password(){
	  return this.loginform.get('password');
  }
  
  

  login(){
	  //console.log(this.loginform.value);
    this.loginUser();
  }


  ngOnInit(): void {
  }

 /* if(user_role === 'admin'){
    route.navigate(['/popularplans']);

    
  };*/
  user=new User();
  private loginUser(){
    this._service.LoginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");

        if((this.user.user_role.match(null)===null)){
          this._router.navigate(['/popularplans'])
        }
        else{
          this._router.navigate(['/admin/dashboard'])
        }
      

        },
      error =>{
        console.log("exception occured");
        this.msg="Bad Credentials, please enter valid emailId and password";
      }
      )

  }
  onSubmit(){
	  console.log(this.user);
    this.loginUser();
  }

}
