import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { WishListService } from './wishList.service';
import { SessionStorageService } from './model/sessionStorageService';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { BookingComponent } from './booking/booking.component';
import { PricingComponent } from './pricing/pricing.component';
import { VerificationComponent } from './verification/verification.component';
import { InformationComponent } from './information/information.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ViewDetails } from './viewDetails/viewDetails.component';
import { AppRoutingModule } from './app-routing.module';
import { TestService } from './test.service';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductList } from './productList/productList.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		ProductList,
		ViewDetails,
		ConfigurationComponent,
		InformationComponent,
		VerificationComponent,
		PricingComponent,
		BookingComponent,
		CartComponent,
		LoginComponent
	],
	entryComponents: [AppComponent],
	bootstrap: [], // Do not bootstrap anything (see ngDoBootstrap() below)
	providers: [TestService,CartService,SessionStorageService,WishListService,AuthService]
})
export class AppModule {

	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).

	ngDoBootstrap() {}
}