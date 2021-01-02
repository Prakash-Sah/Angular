import { CartComponent } from './cart/cart.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ViewDetails } from './viewDetails/viewDetails.component';
import { ProductList } from './productList/productList.component';
import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { InformationComponent } from './information/information.component';
import { VerificationComponent } from './verification/verification.component';
import { BookingComponent } from './booking/booking.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
{ path :"",redirectTo: '/productList',pathMatch: 'full'},
{path :" ", component: ProductList},
{ path: "productList",component: ProductList},
{ path: "viewDetails/:id", component: ViewDetails,children: [
    {path : " ",component:ConfigurationComponent},
    { path: 'config', component: ConfigurationComponent },
    { path: 'info', component: InformationComponent },
    { path: 'verify', component: VerificationComponent },
    { path: 'price', component: PricingComponent },
    { path: 'book', component: BookingComponent }
    ] },
{path : "cart", component:CartComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}