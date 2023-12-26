import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})

/** 
 * Output component
 * There are four elements in an output component
 * 1- In the child component (pager.component.ts) is a child component.
 * 2- We create an output property called pageChanged and set it to an event emitter
 * telling what type of data we want to emit.
 * 3- We create our own method called onPagerChanged and emit the pageChanged event,
 * which uses the @output to emit the event.page comming from the pagination inside our template.
 * 4- In our shop.component.html we have the <app-pager> and as well as the input property, we have
 * the output property, which is the (pageChanged)="onPageChanged($event)".
 * This method calls the onPageChanged method in the shop.component.ts and passes the event.page, comming
 * from the pager component.
 * 5- Inside the shop.component.ts we make use of the onPageChanged() which goes, does the logic and
 * returns the page number and products.
 */

export class PagerComponent {
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  // This is to go from the child to the parent component
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }

}
