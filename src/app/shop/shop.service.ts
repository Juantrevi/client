import { Injectable } from '@angular/core';

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
export class ShopService {

  constructor() { }
}
