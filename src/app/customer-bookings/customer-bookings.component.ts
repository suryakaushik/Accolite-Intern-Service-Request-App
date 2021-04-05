import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-bookings',
  templateUrl: './customer-bookings.component.html',
  styleUrls: ['./customer-bookings.component.css']
})
export class CustomerBookingsComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]
  statusArr = ['Apply Filter', 'Processing', 'Cancelled', 'Accepted', 'Completed']
  allbookings
  bookings
  selectedStatus = "Apply Filter"
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getBookings()
      .subscribe(data => {
        this.bookings = data
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
