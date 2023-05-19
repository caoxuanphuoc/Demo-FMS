import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedFoodResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
