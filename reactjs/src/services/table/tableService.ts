import { CreateOrUpdateTableInput } from './dto/createOrUpdateTableInput';
import { EntityDto } from '../../services/dto/entityDto';
import { GetAllTableOutput } from './dto/getAllTableOutput';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedTableResultRequestDto } from "./dto/PagedTableResultRequestDto";
import { UpdateTableInput } from './dto/updateTableInput';
import http from '../httpService';

class TableService {
  public async create(createTableInput: CreateOrUpdateTableInput) {
    let result = await http.post('api/services/app/Table/Create', createTableInput);
    return result.data.result;
  }

  public async update(updateTableInput: UpdateTableInput) {
    let result = await http.put('api/services/app/Table/Update', updateTableInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/services/app/Table/Delete', { params: entityDto });
    return result.data;
  }

  public async get(entityDto: EntityDto): Promise<CreateOrUpdateTableInput> {
    let result = await http.get('api/services/app/Table/Get', { params: entityDto });
    return result.data.result;
  }

    public async getAll(pagedFilterAndSortedRequest: PagedTableResultRequestDto): Promise<PagedResultDto<GetAllTableOutput>> {
    let result = await http.get('api/services/app/Table/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}
export default new TableService();
