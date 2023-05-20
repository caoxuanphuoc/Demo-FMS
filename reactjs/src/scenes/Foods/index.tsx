import * as React from 'react';
import {  observer } from "mobx-react";
//import Stores from '../../stores/storeIdentifier';
import FoodStore from '../../stores/foodStore';
import AppComponentBase from '../../components/AppComponentBase';
import { GetAllFoodOutput } from '../../services/food/dto/getAllFoodOutput';
import { L } from '../../lib/abpUtility';
import { Table } from 'antd';
export interface IFoodProps {
    foodStore: FoodStore;
    IdTable: number;
}

export interface IFoodState {
    modalVisible: boolean;
    maxResultCount: number;
    skipCount: number;
    userId: number;
    filter: string;
    dataFood: GetAllFoodOutput[];
}
//@inject(Stores.FoodStore)
@observer
class Food extends AppComponentBase<IFoodProps, IFoodState>{
    initData: GetAllFoodOutput = {
        name: "Phuoc",
        id: 1,
        description: "None",
        price: 0
    }
    state = {
        modalVisible: false,
        maxResultCount: 10,
        skipCount: 0,
        userId: 0,
        filter: '',
        dataFood : [this.initData],
      };
    async componentDidMount() {
        await this.getAll();
        
      }
      async getAll() {
        await this.props.foodStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
      }
    
    public render(){
        console.log("food ",this.props.foodStore.foods === undefined? "null":this.props.foodStore.foods.items );
        const dataShow = this.props.foodStore.foods === undefined? []:this.props.foodStore.foods.items.sort((x,y) => x.id - y.id)
        const columns = [
        { title: L('Id'), dataIndex: 'id', key: 'Id', width: '5%', render: (text: string) => <div>{text}</div> },
        { title: L('Food Name'), dataIndex: 'name', key: 'name', width: '15%', render: (text: string) => <div>{text}</div> },
        { title: L('Description'), dataIndex: 'description', key: 'description', width: '15%', render: (text: string) => <div>{text}</div> },
        { title: L('Price'), dataIndex: 'price', key: 'price', width: '15%', render: (text: string) => <div>{text}</div> },
        {
            title: L('Actions'),
            width: '15%',
            render: (text: string, item: any) => (
              <div>
                <button>-</button>
                    <p>6</p>
                <button>+</button>
                {/* <Dropdown
                  trigger={['click']}
                  overlay={
                    <Menu>
                      <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                      <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item>
                    </Menu>
                  }
                  placement="bottomLeft"
                >
                  <Button type="primary" icon={<SettingOutlined />}>
                    {L('Actions')}
                  </Button>
                </Dropdown> */}
              </div>
            ),
          }
    ]
        return(
            <Table
            rowKey={(record) => record.id.toString()}
            bordered={true}
            columns={columns}
            //pagination={{ pageSize: 10, total: dataShow === undefined ? 0 : dataShow.totalCount, defaultCurrent: 1 }}
            loading={dataShow === undefined ? true : false}
            dataSource={dataShow === undefined ? [] : dataShow}
          
            >

            </Table>
        )
    }
}
export default Food;