import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-provider-home-page',
  templateUrl: './provider-home-page.component.html',
  styleUrls: ['./provider-home-page.component.css']
})

export class ProviderHomePageComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]
  statusArr = ['Apply Filter', 'Processing', 'Cancelled', 'Accepted', 'Completed']
  allbookings
  bookings
  selectedStatus = "Apply Filter"
  constructor(private providerService: ProviderService,
    private router: Router) { }

  ngOnInit() {
    this.providerService.getBookings()
      .subscribe(data => {
        this.bookings = data;
        this.allbookings = data
      }, err => {
        console.log(err)
      })
  }

  openBooking(booking) {

    this.router.navigate(['editBooking'], { queryParams: { booking: JSON.stringify(booking) } });

  }

  filterBookings(selectedStatus) {
    this.selectedStatus = selectedStatus
    if (selectedStatus == "Apply Filter") {
      this.bookings = this.allbookings
    } else {
      this.bookings = this.allbookings.filter(x => { return this.selectedStatus == x.bookingStatus })
    }
  }


}

