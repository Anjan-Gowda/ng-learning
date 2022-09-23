import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name:['',[Validators
    .required]],
    pwd:['',[Validators.required]]
    })
  }

}