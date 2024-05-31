import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constants/constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  public cartUpdated$ : Subject<boolean> = new Subject();

  getCategory() {
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_ALL_CATEGORY);
  }

  saveProduct(obj: any){
    return this.http.post(constants.API_END_POINT + constants.METHODS.CREATE_PRODUCT, obj);
  }

  updateProduct(obj: any){
    return this.http.post(constants.API_END_POINT + constants.METHODS.UPDATE_PRODUCT, obj);
  }

  getProducts(){
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_ALL_PRODUCT);
  }

  deleteProduct(id : number){
    return this.http.get(constants.API_END_POINT + constants.METHODS.DELETE_PRODUCT_BY_ID + id);
  }

  getProductByCategoryId(id :number){
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY_ID + id);
  }

  rmFromCart(id :number){
    return this.http.get(constants.API_END_POINT + constants.METHODS.DELETE_PRODUCT_FROM_CART_BY_ID + id);
  }

  getCartProductsByCustomerId(id :number){
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_CART_PRODUCTS_BY_CUST_ID + id);
  }

  addToCart(obj: any){
    return this.http.post(constants.API_END_POINT + constants.METHODS.ADD_TO_CART, obj);
  }
}
