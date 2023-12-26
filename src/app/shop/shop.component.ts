import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  @ViewChild('search', {static: false}) searchTerm?: ElementRef;
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];
  totalCount = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  /**
   * Methods
   * getProducts()
   * getBrands()
   * getTypes()
   * onBrandSelected()
   * onTypeSelected()
   * onSortSelected()
   * onPageChanged()
   */
  
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: Response => {
        this.products = Response.data
        this.shopParams.pageNumber = Response.pageIndex;
        this.shopParams.pageSize = Response.pageSize;
        this.totalCount = Response.count;
      },
      error: error => console.log(error)
    })
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: Response => this.brands = [{id: 0, name: 'All'}, ...Response],
      error: error => console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: Response => this.types = [{id: 0, name: 'All'}, ...Response],
      error: error => console.log(error)
    })
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if(this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  //Reset all the filters
  onReset() {
    if(this.searchTerm) {
      this.searchTerm.nativeElement.value = '';
    }
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
