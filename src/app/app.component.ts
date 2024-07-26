import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { RegisterComponent } from './customer/register/register.component';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';
import { ViewComponent } from './customer/view/view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RegisterComponent,CustomerNavbarComponent,ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-ui';
}
