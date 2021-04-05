import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getLocaleCurrencyName } from '@angular/common';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  // baseUrl: string = "http://localhost:8900/"

  userData = {}

  constructor(private http: HttpClient) { }

  login(credentials) {

    let postBody = { userMail: credentials.email, userPassword: credentials.password }
    // console.log(postBody)

    return this.http.post(`/login/${credentials.userType}`, postBody)
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    localStorage.removeItem("user")
  }

  registerCustomer(details) {

    let postBody = { customerName: details.name, password: details.password, customerEmail: details.email, customerPhone: details.phoneno, customerLocation: details.location }

    return this.http.post("/customer/signup", postBody)

  }

  registerProvider(details) {

    let postBody = { providerName: details.name, password: details.password, providerEmail: details.email, providerPhone: details.phoneno, providerLocation: details.location }

    return this.http.post("/provider/signup", postBody)

  }

  isLoggedIn() {
    if (localStorage.getItem('userId')) {
      return true
    }
    else {
      return false
    }
  }

  userType(user) {
    if (localStorage.getItem("userType") == user) {
      return true
    } else {
      return false
    }
  }


}
