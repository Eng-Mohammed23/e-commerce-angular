import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Iproduct } from '../iproduct';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private httpClient:HttpClient,private _userAuthService:UserAuthService) { }

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }

  getProductById(id:number){
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  getProductByCatId(catId:number){
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products?${catId}`)
  }

  addProduct(newPro:Iproduct){
    return this.httpClient.post(`${environment.baseUrl}/products`,JSON.stringify(newPro));
  }
}
