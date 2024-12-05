import { Routes } from '@angular/router';
import { LoginComponent } from './components/leo-login/leo-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DaniLoginComponent } from './components/dani-login/dani-login/dani-login.component';
// import { DaniMainPageComponent } from './pages/dani-main-page/dani-main-page.component';\
// import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dlogin',component: DaniLoginComponent},
  // { path: 'dmainpage',component: DaniMainPageComponent},
  { path: 'admin',
    loadChildren:() => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)},



];
