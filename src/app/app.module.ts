import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { SignupComponent } from './signup/signup.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    SignupComponent,
    OffersComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavListComponent,
    AccomodationComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AuthService],
})
export class AppModule {}
