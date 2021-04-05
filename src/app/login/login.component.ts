import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {

  }

  constructor(private router: Router, private authService: AuthService) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)]),
    userType: new FormControl('customer', Validators.required)
  }
  )

  get email() {
    return this.form.get('email');
  }

  login() {

    console.log(this.form.value)
    if (this.form.valid) {
      this.authService.login(this.form.value)
        .subscribe(data => {
          localStorage.setItem("userId", data['userId'])
          localStorage.setItem("userType", data['userType'])
          localStorage.setItem('user', JSON.stringify(data))
          console.log(data)
          if (data['userType'] == "customer") {
            this.router.navigateByUrl('/userHomePage')
          } else {
            this.router.navigateByUrl('/providerHomePage')
          }
        }, err => {
          this.form.setErrors({
            invalidLogin: true
          })
        })


    }

  }


}
