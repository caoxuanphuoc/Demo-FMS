import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedTableResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
