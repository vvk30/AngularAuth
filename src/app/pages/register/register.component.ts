import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/exportServices'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  registerUser(form:NgForm){
    this.auth.addUser(JSON.stringify(form.value));
  }

  ngOnInit() {
  }

}
