import { Routes } from '@angular/router';
import { RegisterComponent } from './customer/register/register.component';
import { ViewComponent } from './customer/view/view.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HardwareRegisterComponent } from './hardwareItem/hardware-register/hardware-register.component';
import { HardwareViewComponent } from './hardwareItem/hardware-view/hardware-view.component';

export const routes: Routes = [
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
      },
      {
        path:"hardwareView",
        component:HardwareViewComponent
      }
];

