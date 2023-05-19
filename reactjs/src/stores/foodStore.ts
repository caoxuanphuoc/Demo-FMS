import { action, observable } from 'mobx';

import { CreateOrUpdateFoodInput } from '../services/food/dto/createOrUpdateFoodInput';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedFoodResultRequestDto } from '../services/food/dto/PagedFoodResultRequestDto';
import { UpdateFoodInput } from '../services/food/dto/updateFoodInput';
import foodService from '../services/food/foodService';
import { GetAllFoodOutput } from '../services/food/dto/getAllFoodOutput';

class FoodStore {
  @observable foods!: PagedResultDto<GetAllFoodOutput>;

  @observable editFood!: CreateOrUpdateFoodInput;

  @action
  async create(createFoodInput: CreateOrUpdateFoodInput) {
    let result = await foodService.create(createFoodInput);
    this.foods.items.push(result);
  }

  @action
  async update(updateFoodInput: UpdateFoodInput) {
    let result = await foodService.update(updateFoodInput);
    this.foods.items = this.foods.items.map((x: GetAllFoodOutput) => {
      if (x.id === updateFoodInput.id) x = result;
      return x;
    });
  }

  @action
  async delete(entityDto: EntityDto) {
    await foodService.delete(entityDto);
    this.foods.items = this.foods.items.filter((x: GetAllFoodOutput) => x.id !== entityDto.id);
  }

  @action
  async get(entityDto: EntityDto) {
    let result = await foodService.get(entityDto);
    this.editFood = result;
  }

  @action
  async createFood() {
    this.editFood = {
      name: '',
      id: 0,
      description: '',
      price:0
    };
  }

  @action
  async getAll(pagedFilterAndSortedRequest: PagedFoodResultRequestDto) {
    let result = await foodService.getAll(pagedFilterAndSortedRequest);
    this.foods = result;
  }
}

export default FoodStore;
