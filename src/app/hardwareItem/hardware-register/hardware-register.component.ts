import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hardware-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './hardware-register.component.html',
  styleUrl: './hardware-register.component.css'
})
export class HardwareRegisterComponent {

  public itemObj ={
    itemId:"",
    name:"",
    rentalPerDay:"",
    finerPerDay:"",
    availability:""
  }

  constructor(private http:HttpClient){}

  addItem(){
    this.http.post("http://localhost:8080/hardwareItem",this.itemObj).subscribe(
      (data) =>{
        Swal.fire({
          title: "Hardware Item added!",
          text: "You clicked the button!",
          icon: "success"
        });

      }
    )
}
}
