import { Routes } from '@angular/router';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';
import { RegisterComponent } from './customer/register/register.component';
import { ViewComponent } from './customer/view/view.component';

export const routes: Routes = [
    {
        path:"navbar",
        component:CustomerNavbarComponent,
        
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"view",
        component:ViewComponent
      }
];

