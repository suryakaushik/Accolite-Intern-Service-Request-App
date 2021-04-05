import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterProviderComponent } from './register-provider/register-provider.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ProviderHomePageComponent } from './provider-home-page/provider-home-page.component';
import { PracticeComponent } from './practice/practice.component';
import { AuthService } from './services/auth.service'
import { AuthGuardService } from '../app/services/auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http'
import { ProviderService } from './services/provider.service';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerBookingsComponent } from './customer-bookings/customer-bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterProviderComponent,
    UserHomePageComponent,
    ProviderHomePageComponent,
    PracticeComponent,
    NavbarComponent,
    EditBookingComponent,
    AddServiceComponent,
    ViewServiceComponent,
    AvailableServicesComponent,
    ProfileComponent,
    CustomerBookingsComponent,
    DashboardComponent,

  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
      { path: "practice", component: PracticeComponent },
      { path: 'availableServices', component: AvailableServicesComponent, canActivate: [AuthGuardService] },
      { path: '', component: LoginComponent },
      { path: 'registerUser', component: RegisterUserComponent },
      { path: 'registerProvider', component: RegisterProviderComponent },
      { path: 'userHomePage', component: UserHomePageComponent, canActivate: [AuthGuardService] },
      { path: 'providerHomePage', component: ProviderHomePageComponent, canActivate: [AuthGuardService] },
      { path: 'addService', component: AddServiceComponent, canActivate: [AuthGuardService] },
      { path: 'editBooking', component: EditBookingComponent, canActivate: [AuthGuardService] },
      { path: 'viewServices', component: ViewServiceComponent, canActivate: [AuthGuardService] },
      { path: 'customerBookings', component: CustomerBookingsComponent, canActivate: [AuthGuardService] },
      { path: 'addService', component: AddServiceComponent, canActivate: [AuthGuardService] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }
    ], { onSameUrlNavigation: 'reload' })
  ],
  providers: [AuthService, AuthGuardService, ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
