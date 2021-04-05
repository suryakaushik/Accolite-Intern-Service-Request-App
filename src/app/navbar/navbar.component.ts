import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  isProvider() {
    return this.authService.userType("provider")
  }

  isCustomer() {
    return this.authService.userType("customer");
  }

  buttonClick(event) {

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.path[1].className += " active"
  }

  logout() {
    this.authService.logout();
  }
}
