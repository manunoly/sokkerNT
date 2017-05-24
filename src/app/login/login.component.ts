import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerShow = true;
  @ViewChild('signin') signinForm: NgForm;
  @ViewChild('signup') signupForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  register(){
    this.registerShow = !this.registerShow;
  }
}
