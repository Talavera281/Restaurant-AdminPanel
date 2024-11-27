import { Routes } from '@angular/router';
import { LoginComponent } from './components/leo-login/leo-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
];
