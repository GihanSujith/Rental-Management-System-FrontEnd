import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hardware-view',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './hardware-view.component.html',
  styleUrl: './hardware-view.component.css'
})
export class HardwareViewComponent {
  public itemList: any;



  constructor(private http: HttpClient) {
    this.loadItemTable();
  }

  loadItemTable() {
    this.http.get("http://localhost:8080/item").subscribe(res => {
      this.itemList = res;
      console.log(res);
    })
  }

  deleteItem(item: any) {

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

        this.http.delete(`http://localhost:8080/item/delete-hard/${item.itemId}`, { responseType: 'text' }).subscribe(res => {
          this.loadItemTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);

        })
        console.log(item);


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

  public selectedItem: any = {
    "itemId": null,
    "name": null,
    "rentalPerDay": null,
    "finerPerDay": null,
    "availability":null
    
  };

  updateItem(item: any) {

    if(item!=null){
      this.selectedItem = item;
    }

    console.log(item);

  }

  saveUpdateItem(){
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
        this.http.put("http://localhost:8080/item", this.selectedItem).subscribe(res => {
          console.log("updated!");
        })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    
    })
  }
}
