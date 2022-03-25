import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service : AuthService ,private _router :Router,private _service1:UserService) { }
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
  user1 =new User();
  loginUser(){
    this._service1.LoginUserFromRemote(this.user).subscribe(
    //this._service.generateToken(this.user).subscribe((response)
      data =>{
        console.log("response received");
        this.user1=this.user;
        console.log(this.user1);
        //if(this._service.isLoggedIn())
        if(this._service1.authentication(this.user) === null){
          console.log(this._service1.authentication(this.user) === "admin");
          this._router.navigate(['/admin/dashboard'])
        }
        
        else{
          console.log(this._service1.authentication(this.user));
          this._router.navigate(['/popularplans'])
        }
      
        },
      error =>{
        console.log("exception occured");
        this.msg="Bad Credentials, please enter valid emailId and password";
      }
      )

  }


 
  

}
