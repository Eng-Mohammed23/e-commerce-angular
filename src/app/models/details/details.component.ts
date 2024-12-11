import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../iproduct';
import { Location } from '@angular/common';
import { ApiProductService } from '../../services/api-product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  product:Iproduct | null =null;
  idsArr:number[];
  currentId:number=0;
  constructor(private _activatedRoute:ActivatedRoute
    ,private _staticProductsService:StaticProductsService
    ,private _ApiProductService:ApiProductService
  ,private _location:Location
  ,private router:Router
){

    this.idsArr=this._staticProductsService.mapProductsToIds();
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId=Number(paramMap.get('id'))
      //this.product= this._staticProductsService.getProductById(this.currentId);
      this._ApiProductService.getProductById(this.currentId).subscribe({
        next:(res)=>{
          this.product= res
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    });
      
  }

  goBack(){
    this._location.back();
  }

  goPrev(){
    let index=this.idsArr.findIndex((id)=>id==this.currentId);
    this.router.navigateByUrl(`/Details/${this.idsArr[index-1]}`);
  }

  goNext(){
    let index=this.idsArr.findIndex((id)=>id==this.currentId);
    this.router.navigateByUrl(`/Details/${this.idsArr[index+1]}`);
  }
}
