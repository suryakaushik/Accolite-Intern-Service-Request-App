import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getBookings() {
    return this.http.get(`/provider/bookings/all?providerId=${localStorage.getItem("userId")}`)

  }

  getMyServices() {
    return this.http.get(`/provider/service/all?providerId=${localStorage.getItem("userId")}`)

  }

  getCustomerDetails(customerId) {

  }

  updateService(service, form) {
    let postBody = { serviceId: service.foreignServiceId.serviceId, providerId: service.foreignProviderId.providerId, serviceDescription: service.serviceDescription, discount: form.discount, price: form.price }
    return this.http.post('/provider/service/addService', postBody)
  }

  updateBookingStatus(bookingId, newStatus) {
    console.log(bookingId)

    return this.http.put(`/provider/booking/updateStatus?bookingId=${bookingId}&status=${newStatus}`, {})

  }

  addService(details) {

    let postBody = { serviceId: parseInt(details.service), providerId: parseInt(localStorage.getItem("userId")), serviceDescription: details.desc, discount: details.discount, price: details.price }
    return this.http.post('/provider/service/addService', postBody)

  }

  addNewService(serviceName) {
    return this.http.post<{ serviceId: number; serviceName: string }>('/service/addService', { serviceName: serviceName })

  }


  getDashboard() {
    return this.http.get(`/provider/dashboard?providerId=${localStorage.getItem('userId')}`)
  }

}
