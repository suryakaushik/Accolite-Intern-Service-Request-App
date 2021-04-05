import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { parse } from 'querystring';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }

  getAllServices() {

    return this.http.get('/service')

  }
  getServicesByCategory(serviceId) {

    return this.http.get(`/customer/serviceProviders/${serviceId}`)

  }

  bookService(spId) {
    let postData = { spId: spId, customerId: parseInt(localStorage.getItem("userId")) }
    return this.http.post('/customer/bookService', postData)
  }

  getBookings() {
    return this.http.get(`/customer/getBookings/${localStorage.getItem('userId')}`)
  }

  submitRating(bookingId, rating, desc) {

    let postBody = { bookingId: bookingId, ratingDescription: desc, ratingPoints: rating * 2 }
    console.log(postBody)

    return this.http.post('/customer/rateService', postBody)

  }
}
