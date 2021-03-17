import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthgaurdGuard } from '../AuthGaurd/authgaurd.guard';
import { TopCourierComponent } from './top-courier/top-courier.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthgaurdGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'service-partner', component: TopCourierComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'contactUs', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
