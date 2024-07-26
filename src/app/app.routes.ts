import { Routes } from '@angular/router';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';
import { RegisterComponent } from './customer/register/register.component';
import { ViewComponent } from './customer/view/view.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HardwareRegisterComponent } from './hardwareItem/hardware-register/hardware-register.component';

export const routes: Routes = [
    {
        path:"navbar",
        component:NavbarComponent
        
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"view",
        component:ViewComponent
      },
      {
        path:"hardwareRegister",
        component:HardwareRegisterComponent
      }
];

