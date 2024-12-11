import { Component } from '@angular/core';
import { ApiProductService } from '../../services/api-product.service';
import { Iproduct } from '../../iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct:Iproduct ={} as Iproduct
  constructor(private _ApiProductService:ApiProductService,
    private router:Router
  ){ }

addNewProduct(){
  this._ApiProductService.addProduct(this.newProduct).subscribe({
    next:(res)=>{
      alert('Done')
      this.router.navigateByUrl('/Products')
    },
    error:(err)=>{
      console.log(err)
    }
   })
}
 
}
