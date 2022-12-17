import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { TokeninterceptorService } from './service/tokeninterceptor.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddaccountuserslistComponent } from './addaccountuserslist/addaccountuserslist.component';
import { AccountComponent } from './account/account.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { DepositcashComponent } from './depositcash/depositcash.component';
import { WithdrawcashComponent } from './withdrawcash/withdrawcash.component';
import { TransfercashComponent } from './transfercash/transfercash.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    GetAllUsersComponent,
    AdminHomeComponent,
    AdminapprovalComponent,
    AddaccountuserslistComponent,
    AccountComponent,
    TransactionHistoryComponent,
    DepositcashComponent,
    WithdrawcashComponent,
    TransfercashComponent,


    //BackgroundimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      preventDuplicates: true,
      progressAnimation: 'decreasing'
    }),
    MatSlideToggleModule,
    MatTabsModule




  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokeninterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
