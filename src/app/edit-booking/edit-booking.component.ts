import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ProviderService } from '../services/provider.service';
import { AuthService } from '../services/auth.service'
import { FormsModule } from '@angular/forms'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  rating: string;
  booking
  desc
  statusArr = { "PROCESSING": "Processing", "CANCELLED": "Cancelled", "ACCEPTED": "Accepted", "COMPLETED": "Completed" }
  constructor(private route: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit() {
    this.booking = JSON.parse(this.route.snapshot.queryParamMap.get('booking'));
    console.log(this.booking)
    //console.log(this.booking)
    // this.providerService.getCustomerDetails()
    //this.booking.location = "Hyderabad"
    //console.log(this.booking)

  }

  checkStatus(status, type) {
    //console.log(status, this.booking.bookingStatus)
    if (type) {
      return this.booking.bookingStatus == status && this.authService.userType(type);
    } else {
      return this.booking.bookingStatus == status
    }
  }

  updateStatus(newStatus) {
    console.log(this.booking.bookingId)
    this.providerService.updateBookingStatus(this.booking.bookingId, newStatus)
      .subscribe(data => {
        console.log(data)

        if (this.authService.userType('provider')) {
          this.router.navigate(['/providerHomePage'])
        } else {
          this.router.navigate(['/customerBookings'])
        }

      }, err => {
        console.log(err)
      })
  }

  getRating(t: string) {
    this.rating = t;
    console.log(this.rating);
  }

  submitFeedback() {

    this.userService.submitRating(this.booking.bookingId, this.rating, this.desc)
      .subscribe(data => {
        this.router.navigate(['/customerBookings'])
      }, err => {
        console.log(err)
      })

  }




}
