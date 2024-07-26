import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  public customerList: any;



  constructor(private http: HttpClient) {
    this.loadCustomerTable();
  }

  loadCustomerTable() {
    this.http.get("http://localhost:8080/customer").subscribe(res => {
      this.customerList = res;
      console.log(res);
    })
  }
}
