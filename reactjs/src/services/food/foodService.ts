import { CreateOrUpdateFoodInput } from './dto/createOrUpdateFoodInput';
import { EntityDto } from '../../services/dto/entityDto';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedFoodResultRequestDto } from "./dto/PagedFoodResultRequestDto";
import { UpdateFoodInput } from './dto/updateFoodInput';
import http from '../httpService';
import { GetAllFoodOutput } from './dto/getAllFoodOutput';

class foodService {
  public async create(createFoodInput: CreateOrUpdateFoodInput) {
    let result = await http.post('api/services/app/Food/Create', createFoodInput);
    return result.data.result;
  }

  public async update(updateFoodInput: UpdateFoodInput) {
    let result = await http.put('api/services/app/Food/Update', updateFoodInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete('api/services/app/Food/Delete', { params: entityDto });
    return result.data;
  }

  public async get(entityDto: EntityDto): Promise<CreateOrUpdateFoodInput> {
    let result = await http.get('api/services/app/Food/Get', { params: entityDto });
    return result.data.result;
  }

    public async getAll(pagedFilterAndSortedRequest: PagedFoodResultRequestDto): Promise<PagedResultDto<GetAllFoodOutput>> {
    let result = await http.get('api/services/app/Food/GetAll', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
}
export default new foodService();
