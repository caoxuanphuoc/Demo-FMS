import * as React from 'react';
import { inject, observer } from "mobx-react";
import TableStore from "../../stores/tableStore";
import Stores from "../../stores/storeIdentifier";
import AppComponentBase from "../../components/AppComponentBase";
import { Card, Row, Divider, Col, Tag } from 'antd';
import { GetAllTableDetailOutput } from '../../services/table/dto/getAllTableDatailOuput';
import Food from '../Foods';
import FoodStore from '../../stores/foodStore';
import './index.less';
import { ArrowLeftOutlined } from '@ant-design/icons';

export interface ITableProps {
    tableStore: TableStore;
    foodStore: FoodStore;
}

export interface ITableState {
    modalVisible: boolean;
    maxResultCount: number;
    skipCount: number;
    userId: number;
    filter: string;
    dataTable: GetAllTableDetailOutput[];
    currentTable: number;
}
@inject(Stores.TableStore, Stores.FoodStore)
@observer

class Table extends AppComponentBase<ITableProps, ITableState>{
    initData: GetAllTableDetailOutput = {
        name: "Phuoc",
        id: 1,
        state: "None",
        creationTime: new Date()
    }
    state = {
        modalVisible: true,
        maxResultCount: 10,
        skipCount: 0,
        userId: 0,
        filter: '',
        dataTable: [this.initData],
        currentTable: 0
    }
    async componentDidMount() {
        await this.getAll();

        this.setState({
            dataTable: this.props.tableStore.tableDetails.items.map(e => {
                var res: GetAllTableDetailOutput = {
                    name: e.name,
                    id: e.id,
                    state: e.state,
                    creationTime: e.creationTime
                }
                return res
            }).sort((x, y) => x.id - y.id)
        }
        )
    }

    async getAll() {
        await this.props.tableStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
    }
    ShowMenu(record: any) {
        //console.log("hi", record)
        this.setState({
            currentTable: record.id,
            modalVisible: !this.state.modalVisible
        })
    }
    public render() {
        //console.log("hellooo", this.state.dataTable)
        //   const {tables} = this.props.tableStore

        return (
            this.state.modalVisible ?
                <Card >
                    <Divider orientation="left">Table</Divider>
                    <Row gutter={[16, 24]}>
                        {
                            this.state.dataTable ?
                                this.state.dataTable.map(option => (
                                    <Col className="gutter-row" span={6} key={option.id}>
                                        {/* <Button key={"button" + option.id} style={{width : '80px'}}
                                  type={option.state === 'None'? "primary" : option.state === 'OK' ? "ghost"  :"dashed"}>
                                   {option.name}
                                </Button> */}
                                        <Tag key={"button" + option.id} style={{ width: '80px', cursor: "pointer" }}
                                            color={
                                                option.state === 'OK' ? 'Green' :
                                                    option.state === 'Waiting' ? 'Gold' :
                                                        option.state === 'None' ? '#1890ff' :
                                                            'Red'
                                            }
                                            onClick={e => this.ShowMenu(option)}
                                            className='shadow-left'
                                        >
                                            {option.name}
                                        </Tag>

                                    </Col>
                                )
                                )
                                : null
                        }
                    </Row>
                    <Row style={{ paddingLeft: '35%', paddingTop: "8%"}}>
                        <Card style={{backgroundColor :'#eef1fa'}}>
                            <Tag color='Green'> Đủ món</Tag>
                            <Tag color='Gold'> Đang chờ</Tag>
                            <Tag color='#1890ff'> Bàn trống</Tag>
                            <Tag color='Red'> Chờ thanh toán</Tag>

                        </Card>
                    </Row>
                </Card>
                :
                <Card>
                    <Row>
                        <Col style={{alignItems: 'center'}}>
                        <ArrowLeftOutlined  onClick={e => { this.setState({ modalVisible: !this.state.modalVisible }) }} />
                        </Col>
                        <Col style={{paddingLeft: '20%'}}>
                        <h2>{"Table " + this.state.currentTable.toString()}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Food
                            IdTable={this.state.currentTable}
                            foodStore={this.props.foodStore}
                        ></Food>
                    </Row>
                </Card>

        )
    }
}
export default Table;