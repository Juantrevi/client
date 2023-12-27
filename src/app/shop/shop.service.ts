import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';
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
 * Services are singletons, meaning that they are instantiated only once
 * during the lifetime of the application.
 * Services are injectable, meaning that they can be injected as a dependency
*/
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(ShopParams: ShopParams) {
    let params = new HttpParams();

    if(ShopParams.brandId > 0) {
      params = params.append('brandId', ShopParams.brandId);
    }

    if(ShopParams.typeId > 0) {
      params = params.append('typeId', ShopParams.typeId);
    }

    params = params.append('sort', ShopParams.sort);
    params = params.append('pageIndex', ShopParams.pageNumber);
    params = params.append('pageSize', ShopParams.pageSize);
    if(ShopParams.search) {
      params = params.append('search', ShopParams.search);
    }
    

    //We dont subscribe here because we want to return the observable
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }

}
