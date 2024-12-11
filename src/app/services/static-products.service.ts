import { Injectable } from '@angular/core';
import { Iproduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  products:Iproduct[];
  constructor() {
    this.products=[
      {id:100,name:"pizza",price:150,quantity:45,imgUrl:"assets/images/images.jfif",catId:1},
      {id:200,name:"cake",price:200,quantity:10,imgUrl:"assets/images/images.jfif",catId:2},
      {id:300,name:"soap",price:50,quantity:11,imgUrl:"assets/images/images.jfif",catId:3},
      {id:400,name:"chacklet",price:250,quantity:30,imgUrl:"assets/images/images.jfif",catId:4},
      {id:500,name:"shepsi",price:150,quantity:45,imgUrl:"assets/images/images.jfif",catId:1},
      {id:600,name:"Tomaom",price:200,quantity:10,imgUrl:"assets/images/images.jfif",catId:2},
      {id:700,name:"opp",price:50,quantity:11,imgUrl:"assets/images/images.jfif",catId:3},
      {id:800,name:"pjjkd",price:250,quantity:30,imgUrl:"assets/images/images.jfif",catId:4}
    ]
   }

   getAllProducts():Iproduct[]{
      return this.products;
   }

   getProductById(id:number): Iproduct | null{
      let foundProduct = this.products.find((pro)=>pro.id == id);
      return foundProduct? foundProduct:null;
   }

   getProductByCatId(categoryId:number):Iproduct[]{
    if(categoryId != 0){
      return this.products.filter((pro)=>pro.catId == categoryId);
    }
      return this.products;
   }

   mapProductsToIds(){
    return this.products.map((pro)=>pro.id)
   }
}
