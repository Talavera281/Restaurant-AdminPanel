import { Routes } from "@angular/router";
import { AdminHomePage } from "./pages/admin-home/admin-home.component";
import { AdminLayoutComponent } from "./admin.component";
import { AdminDishesPage } from "./pages/admin-dishes/admin-dishes.component";
import { AdminUsersPage } from "./pages/admin-users/admin-users.component";
import { AdminReservePage } from "./pages/admin-reserve/admin-reserve.component";


export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: '', component: AdminHomePage },
    { path: 'dishes', component: AdminDishesPage },
    { path: 'users', component: AdminUsersPage },
    { path: 'reserve', component: AdminReservePage },



  ]
}
]
