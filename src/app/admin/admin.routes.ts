import { Routes } from "@angular/router";
import { AdminHomePage } from "./pages/admin-home/admin-home.component";
import { AdminLayoutComponent } from "./admin.component";
import { AdminDishesPage } from "./pages/admin-dishes/admin-dishes.component";


export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: '', component: AdminHomePage },
    { path: 'dishes', component: AdminDishesPage },

  ]
}
]
