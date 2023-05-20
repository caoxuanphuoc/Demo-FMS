import { CreateOrUpdateTableInput } from './dto/createOrUpdateTableInput';
import { EntityDto } from '../../services/dto/entityDto';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedTableResultRequestDto } from "./dto/PagedTableResultRequestDto";
import { UpdateTableInput } from './dto/updateTableInput';
import http from '../httpService';
import { GetAllTableDetailOutput } from './dto/getAllTableDatailOuput';

class tableService {
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

    public async getAll2(pagedFilterAndSortedRequest: PagedTableResultRequestDto): Promise<PagedResultDto<GetAllTableDetailOutput>> {
    let result = await http.get('api/services/app/Table/GetAll2', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}
export default new tableService();
