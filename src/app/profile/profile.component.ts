import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    name: 'John Doe',
    mail: 'kk1234@gmail.com',
    location: 'Hyderabad, India',
    phone: '9123456789',
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    id: '1',
  };

  constructor() {


  }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem("user"))

  }

}
