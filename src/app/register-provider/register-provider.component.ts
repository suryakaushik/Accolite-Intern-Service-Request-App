import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent {

  constructor(private router: Router, private authService: AuthService) { }
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*')
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*')]),
    phoneno: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)])
  })
  register() {

    this.authService.registerProvider(this.form.value)
      .subscribe(data => {

        this.router.navigateByUrl('/')

      }, err => {

        this.form.setErrors({
          alreadyExists: true
        })

      })

  }
}
