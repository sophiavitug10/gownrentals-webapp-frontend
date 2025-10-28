// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { GowncatalogComponent } from './gowncatalog/gowncatalog.component';
import { GowncategoryComponent } from './gowncategory/gowncategory.component';
import { GowndetailsComponent } from './gowndetails/gowndetails.component';
import { RentalorderComponent } from './rentalorder/rentalorder.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'customer-dashboard', component: CustomerdashboardComponent },
  { path: 'vendor-dashboard', component: VendordashboardComponent },
  { path: 'gown-catalog', component: GowncatalogComponent },
  { path: 'gown-category', component: GowncategoryComponent },
  { path: 'gown-details', component: GowndetailsComponent },
  { path: 'rental-order', component: RentalorderComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




