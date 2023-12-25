import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})

export class PagingHeaderComponent {
  /**
   * @Input decorator
   * This decorator is used to pass data from a parent component to a child component.
   * 
   */
  @Input() pageNumber?: number;
  @Input() pageSize?: number;
  @Input() totalCount?: number;

}
