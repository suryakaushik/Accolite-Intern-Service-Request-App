import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ProviderService } from '../services/provider.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]
  serviceName
  serviceId
  allbookings
  bookings
  selectedFilter = "Apply Filter"


  pricesFilter = [[0, 500], [500, 1000], [1000, 2000], [2000, 3000], [3000, 5000]]



  clickedService
  constructor(private providerService: ProviderService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.serviceId = this.route.snapshot.queryParamMap.get("serviceId")
    this.serviceName = this.route.snapshot.queryParamMap.get("serviceName")
    this.userService.getServicesByCategory(this.serviceId)
      .subscribe(data => {
        this.bookings = data
        this.allbookings = data
      }, err => {
        console.log(err)
      })
  }

  selectService(booking) {

    this.clickedService = booking;


  }

  bookService() {
    this.userService.bookService(this.clickedService.spId)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/userHomePage'])
      }, err => {
        console.log(err)
      })

  }

  filterBookings(selectedStatus) {
    if (selectedStatus == "Apply Filter") {
      this.selectedFilter = selectedStatus
      this.bookings = this.allbookings
    } else {
      this.selectedFilter = selectedStatus[0] + " to " + selectedStatus[1]

      this.bookings = this.allbookings.filter(x => { return selectedStatus[0] <= x.price && x.price <= selectedStatus[1] })
    }
  }

  // selectFilter(filter) {
  //   this.selectedFilter = "Nofilter"
  //   this.selectedFilter = filter
  //   this.statusArr = this.filters[filter]
  // }

}
