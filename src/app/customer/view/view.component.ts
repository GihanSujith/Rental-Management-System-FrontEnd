import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  deleteCustomer(customer: any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/customer/delete-cust/${customer.customerId}`, { responseType: 'text' }).subscribe(res => {
          this.loadCustomerTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);

        })
        console.log(customer);


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  public selectedCustomer: any = {
    "customerId": null,
    "name": null,
    "city": null,
    "contact": null
    
  };

  updateCustomer(customer: any) {

    if(customer!=null){
      this.selectedCustomer = customer;
    }

    console.log(customer);

  }

  saveUpdateCustomer(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        this.http.put("http://localhost:8080/customer", this.selectedCustomer).subscribe(res => {
          console.log("updated!");
        })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    
    })
  }
}
