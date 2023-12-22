import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Hello World';
  products: Product[] = [];
  
  //Constructor is used tipically for dependency injection, like services.
  constructor(private http: HttpClient) { }
  
  //ngOnInit is used for initializations, like calling functions.
  ngOnInit(): void {
    
    //.get<Pagination<Product[]>> we are saying that we will be
    // returning a Pagination of type Product array.
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products').subscribe({
      next: response  => {
        this.products = response.data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Complete');
        console.log('------------------');
      }
    });

  }
}
