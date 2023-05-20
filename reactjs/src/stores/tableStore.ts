import { action, observable } from 'mobx';

import { CreateOrUpdateTableInput } from '../services/table/dto/createOrUpdateTableInput';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedTableResultRequestDto } from '../services/table/dto/PagedTableResultRequestDto';
import { UpdateTableInput } from '../services/table/dto/updateTableInput';
import tableService from '../services/table/tableService';
import { GetAllTableOutput } from '../services/table/dto/getAllTableOutput';
import { GetAllTableDetailOutput } from '../services/table/dto/getAllTableDatailOuput';

class TableStore {
  @observable tableDetails!: PagedResultDto<GetAllTableDetailOutput>;
  @observable tables!: PagedResultDto<GetAllTableOutput>;

  @observable editTable!: CreateOrUpdateTableInput;

  @action
  async create(createTableInput: CreateOrUpdateTableInput) {
    let result = await tableService.create(createTableInput);
    this.tables.items.push(result);
  }

  @action
  async update(updateTableInput: UpdateTableInput) {
    let result = await tableService.update(updateTableInput);
    this.tables.items = this.tables.items.map((x: GetAllTableOutput) => {
      if (x.id === updateTableInput.id) x = result;
      return x;
    });
  }

  @action
  async delete(entityDto: EntityDto) {
    await tableService.delete(entityDto);
    this.tables.items = this.tables.items.filter((x: GetAllTableOutput) => x.id !== entityDto.id);
  }

  @action
  async get(entityDto: EntityDto) {
    let result = await tableService.get(entityDto);
    this.editTable = result;
  }

  @action
  async createTable() {
    this.editTable = {
      name: '',
      id: 0,
    };
  }

  @action
  async getAll(pagedFilterAndSortedRequest: PagedTableResultRequestDto) {
    let result = await tableService.getAll2(pagedFilterAndSortedRequest);
    this.tableDetails = result;
  }
}

export default TableStore;
