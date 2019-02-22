import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username:any="";
  password:any="";
    constructor(private router : Router ) { }
  
    ngOnInit() {
    }
    loginUser(event) {
      event.preventDefault();
      var user:string = this.username;
      var pass:string = this.password;
  
      if(user == "admin" && pass == "admin@123")
      {
        this.router.navigate(['/','mainpage']);
        console.log("Login succesful");
      }
      else {
        alert("Login Unsuccessful!! Please try again!");
      }
    }
  }
