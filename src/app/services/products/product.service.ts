import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_PRODUCT);
  }
  getCategory(){
    return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_CATEGORY);
  }
  saveProduct(obj: any){
    return this.http.get(constant.API_END_POINT + constant.METHODS.GET_ALL_CATEGORY,obj);
  }
}
