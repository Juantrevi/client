import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Hello World';
  
  //Constructor is used tipically for dependency injection, like services.
  constructor(private http: HttpClient) { }
  
  //ngOnInit is used for initializations, like calling functions.
  ngOnInit(): void {
    
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: (response: any) => {
        console.log(response);
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
