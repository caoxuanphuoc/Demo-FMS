import * as React from 'react';
import { inject, observer } from "mobx-react";
import Stores from "../../stores/storeIdentifier";
import AppComponentBase from "../../components/AppComponentBase";
import FoodStore from '../../stores/foodStore';
import { Card, Table,Menu,Dropdown,Button, Modal,Row,Col} from 'antd';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import {PlusOutlined, SettingOutlined } from '@ant-design/icons';

import { EntityDto } from '../../services/dto/entityDto';
import CreateOrUpdateFood from './components/createOrUpdateFood';
export interface ITableProps {
    foodStore: FoodStore;
    IdTable: number;
}

export interface ITableState {
    modalVisible: boolean;
    maxResultCount: number;
    skipCount: number;
    userId: number;
    filter: string;
}
const confirm = Modal.confirm;
@inject(Stores.TableStore, Stores.FoodStore)
@observer

   
class ShowFood extends AppComponentBase<ITableProps, ITableState>{
    formRef = React.createRef<FormInstance>();
    state = {
        modalVisible: false,
        maxResultCount: 10,
        skipCount: 0,
        userId: 0,
        filter: ''
    }
    async componentDidMount() {
        await this.getAll();
    }

    async getAll() {
        await this.props.foodStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
    }
    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
      };
    Modal = () => {
        this.setState({
          modalVisible: !this.state.modalVisible,
        });
      };
      async createOrUpdateModalOpen(entityDto: EntityDto) {
        if (entityDto.id === 0) {
          await this.props.foodStore.createFood();
        
        } else {
          await this.props.foodStore.get(entityDto);

        }
        this.setState({ userId: entityDto.id });
        this.Modal();
    
        setTimeout(() => {
          this.formRef.current?.setFieldsValue({ ...this.props.foodStore.editFood });
        }, 100);
      }
    delete(input: EntityDto) {
        const self = this;
        confirm({
          title: 'Do you Want to delete these items?',
          onOk() {
            self.props.foodStore.delete(input);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      handleCreate = () => {
        const form = this.formRef.current;
    
        form!.validateFields().then(async (values: any) => {
          if (this.state.userId === 0) {
            await this.props.foodStore.create(values);
          } else {
            await this.props.foodStore.update({ ...values, id: this.state.userId });
          }
    
          await this.getAll();
          this.setState({ modalVisible: false });
          form!.resetFields();
        });
      };
      
    public render() {
        
        console.log("food ",this.props.foodStore.foods === undefined? "null":this.props.foodStore.foods.items );
        const {foods} = this.props.foodStore
        const columns = [
        { title: L('Id'), dataIndex: 'id', key: 'Id', width: '5%', render: (text: string) => <div>{text}</div> },
        { title: L('Food Name'), dataIndex: 'name', key: 'name', width: '15%', render: (text: string) => <div>{text}</div> },
        { title: L('Description'), dataIndex: 'description', key: 'description', width: '15%', render: (text: string) => <div>{text}</div> },
        { title: L('Price'), dataIndex: 'price', key: 'price', width: '15%', render: (text: string) => <div>{text}</div> },
        {
            title: L('Actions'),
            width: 150,
            render: (text: string, item: any) => (
              <div>
                <Dropdown
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
                </Dropdown>
              </div>
            ),
          },
    ]
        return (
            <Card>
                 <Row>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          >
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => this.createOrUpdateModalOpen({ id: 0 })} />
          </Col>
        </Row>
        <Row>
        <Table
                rowKey={(record) => record.id.toString()}
                bordered={true}
                columns={columns}
                pagination={{ pageSize: 10, total: foods === undefined ? 0 : foods.totalCount, defaultCurrent: 1 }}
                loading={foods === undefined ? true : false}
                 dataSource={foods === undefined ? [] : foods.items.sort((X,Y) => X.id -Y.id)}
                 onChange={this.handleTableChange}
                />
        </Row>     

        <CreateOrUpdateFood
          formRef={this.formRef}
          visible={this.state.modalVisible}
          onCancel={() => {
            this.setState({
              modalVisible: false,
            });
            this.formRef.current?.resetFields();
          }}
          modalType={this.state.userId === 0 ? 'edit' : 'create'}
          onCreate={this.handleCreate}
        />
        </Card>
                
        )
    }
}
export default ShowFood;