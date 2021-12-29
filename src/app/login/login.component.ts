import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  genders = ['male', 'female'];

  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(form, formData) {
    console.log('submitted formdata', formData);
    form.reset();
  }

  redirect() {
    this.router.navigate(['signup']);
  }

}
