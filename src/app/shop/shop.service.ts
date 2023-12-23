import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
/**
 * @Injectable decorator 
 * The @Injectable decorator marks it as a service that can be injected
 * as a dependency, so we can inject our service into our components.
 */
@Injectable({
  /** 
   * providedIn:
   * This means that the service will be provided in the root module
   * and will be instantiated when the application loads.
   * We could change it, for example, to providedIn: ShopModule
   * and the service would be instantiated when the ShopModule loads.
   * If we keep it in 'root', it will keep alive until the application is closed
   * This makes services ideal to store application wide state, something that
   * component are not designed to do.
  */
  providedIn: 'root'
})

/** 
 * Services
 * Useful to centralize http requests, authentication, logging, etc.
*/
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts() {
    //We dont subscribe here because we want to return the observable
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products?pageSize=50')
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }

}
