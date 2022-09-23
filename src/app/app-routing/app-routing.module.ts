import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { OffersComponent } from '../offers/offers.component';
import { SignupComponent } from '../signup/signup.component';
import { AccomodationComponent } from '../accomodation/accomodation.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[AuthGuard]  },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'accomodation', component: AccomodationComponent ,canActivate:[AuthGuard] },
  { path: 'offers', component: OffersComponent,canActivate:[AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }