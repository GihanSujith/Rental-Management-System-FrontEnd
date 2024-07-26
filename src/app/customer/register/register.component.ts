import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public customerObj ={
    name:"",
    city:"",
    contact:""
  }

  constructor(private http:HttpClient){}

  addCustomer(){
    this.http.post("http://localhost:8080/customer",this.customerObj).subscribe(
      (data) =>{
        Swal.fire({
          title: "Customer added!",
          text: "You clicked the button!",
          icon: "success"
        });

      }
    )


  }
}
