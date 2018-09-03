import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/category.service';
import { CommonService } from 'src/app/services/common.service';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    LoginComponent,
    ProductsComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    HomeComponent,
    CheckOutComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        {path: '', component: HomeComponent },
        {path: 'products', component: ProductsComponent },
        {path: 'shopping-cart', component: ShoppingCartComponent },
        {path: 'check-out', component: CheckOutComponent /*canActivate: [AuthGuard]*/ },
        {path: 'my/orders', component: MyOrdersComponent },
        {path: 'login', component: LoginComponent },
        
        {path: 'admin/product/new', component: ProductFormComponent },
        {path: 'admin/product/:id', component: ProductFormComponent },
        {path: 'admin/products', component: AdminProductsComponent },
        
        {path: 'admin/orders', component: AdminOrdersComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    CommonService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
