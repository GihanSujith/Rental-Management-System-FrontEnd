import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { RegisterComponent } from './customer/register/register.component';
import { ViewComponent } from './customer/view/view.component';
import { HardwareRegisterComponent } from './hardwareItem/hardware-register/hardware-register.component';
import { HardwareViewComponent } from './hardwareItem/hardware-view/hardware-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RegisterComponent,ViewComponent,HardwareRegisterComponent,HardwareViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-ui';
}
