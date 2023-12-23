import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  /**
   * product?: Product
   * Is saying that the product is optional
   */
  @Input() product?: Product;

}
