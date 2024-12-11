import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Icategory } from '../../icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductComponent,CommonModule,FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  recievedTotalPric:number=0;
  categories:Icategory[];
  totalOrder:number=0;
  secectedCatId:number=0;
  constructor(){
    this.categories=[
      {id:1,name:"peef"},
      {id:2,name:"sweet"},
      {id:3,name:"vegetarian"},
      {id:4,name:"chacklet"}
    ]
  }
  calcTotalPrice(receive:number){
    this.recievedTotalPric=receive;
  }
}
