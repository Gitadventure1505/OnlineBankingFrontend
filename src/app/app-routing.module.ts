import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { AddaccountuserslistComponent } from './addaccountuserslist/addaccountuserslist.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'getAllUsers', component: GetAllUsersComponent, canActivate: [AuthGuardGuard, AuthorizationGuard] },
  { path: 'adminhome', component: AdminHomeComponent, canActivate: [AuthGuardGuard, AuthorizationGuard] },
  { path: 'adminapprove', component: AdminapprovalComponent, canActivate: [AuthGuardGuard, AuthorizationGuard] },
  { path: 'addaccountlist', component: AddaccountuserslistComponent, canActivate: [AuthGuardGuard, AuthorizationGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
