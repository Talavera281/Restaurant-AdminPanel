import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/leo-login/leo-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { RegisterplatilloComponent } from './components/platillos/registerplatillo/registerplatillo.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'platillos', component: PlatillosComponent },
      { path: 'domicilio', component: PlatillosComponent },
      { path: 'gastos', component: PlatillosComponent },
      { path: 'productos', component: PlatillosComponent },
      { path: 'user', component: UserComponent },
      { path: 'registeruser', component: RegisterComponent },
      { path: 'registerplatillo', component: RegisterplatilloComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
