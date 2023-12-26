import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';

/** 
 * SharedModule
 * This module is responsible for the shared components and modules.
 * declarations, imports, and exports are all used to make the components available to other modules.
 * 
*/

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],

  /** 
   * exports
   * Each time we create a component, we need to add it to the exports array so that it can be used by other modules.
   */
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
