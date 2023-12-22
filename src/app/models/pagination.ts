/**
 * Pagination interface
 * Pagination<T> is a generic type that takes a type argument T
 * so it can be reused for different types of data.
 */
export interface Pagination<T> {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: T;
  }