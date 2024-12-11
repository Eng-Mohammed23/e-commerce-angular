import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HighlightcardDirective } from '../../directives/highlightcard.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { OrderComponent } from '../order/order.component';
import { StaticProductsService } from '../../services/static-products.service';
import { Route, Router } from '@angular/router';
import { ApiProductService } from '../../services/api-product.service';

@Component({
  selector: 'app-product',  
  standalone: true,
  imports: [CommonModule,FormsModule,HighlightcardDirective,SquarePipe,OrderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges,OnInit{
  @Output() onChangePrice:EventEmitter<number>
  @Input() recievedCatId:number=0
  totalOrder:number=0;
  test:number=1;
  selectedProduct:Iproduct[];
  products:Iproduct[] =[] as Iproduct[];
  constructor(private _StaticProductsService:StaticProductsService,
    private _ApiProductService:ApiProductService,
    private router:Router
  ){
    //this.onChangePrice=new EventEmitter<number>();
    //this.products=_StaticProductsService.getAllProducts();
    
    this.selectedProduct=this.products;
    this.onChangePrice = new EventEmitter<number>();
    
  }

  ngOnInit(): void {
    this._ApiProductService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res;
        this.selectedProduct = this.products;
      },
      error:(err) =>{
        console.log(err);
        
      }
    })
  }
  buy(count:string,price:number ){
     this.totalOrder+=+count*price;
     
     this.onChangePrice.emit(this.totalOrder);
  }
  ngOnChanges(){
    //this.selectedProduct=this._StaticProductsService.getProductByCatId(this.recievedCatId);
    //this.selectedProduct=this._ApiProductService.getProductById(this.recievedCatId);
  }

  navigatToDetails(id:number){
    this.router.navigateByUrl(`/Details/${id}`);
  }
}
