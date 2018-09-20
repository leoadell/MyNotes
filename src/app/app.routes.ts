import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { audit } from 'rxjs/operators';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent , 
    canActivate:[AuthGuard] },
    { path: '**', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouters { }
