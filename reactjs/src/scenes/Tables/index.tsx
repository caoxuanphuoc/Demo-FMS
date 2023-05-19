import * as React from 'react';
import { inject, observer } from "mobx-react";
import TableStore from "../../stores/tableStore";
import Stores from "../../stores/storeIdentifier";
import AppComponentBase from "../../components/AppComponentBase";
import { Card, Row, Divider, Col, Tag } from 'antd';
import { GetAllTableDetailOutput } from '../../services/table/dto/getAllTableDatailOuput';
import Food from '../Foods';
import FoodStore from '../../stores/foodStore';
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
        console.log("hi", record)
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
                                        <Tag key={"button" + option.id} style={{ width: '80px' }}
                                            color={
                                                option.state === 'OK' ? 'Green' :
                                                    option.state === 'Waitting' ? 'Gold' :
                                                        option.state === 'None' ? '#1890ff' :
                                                            'Red'
                                            }
                                            onClick={e => this.ShowMenu(option)}
                                        >
                                            {option.name}
                                        </Tag>

                                    </Col>
                                )
                                )
                                : null
                        }
                    </Row>
                </Card>
                :
                <Card>
                    <Row>
                    <ArrowLeftOutlined   onClick={e => { this.setState({modalVisible: !this.state.modalVisible})}}/>
                    </Row>
                    <Row>
                        {/* menu */}
                        <Col
                            style={{width: "70%", marginTop: "3%"}}
                        >
                            <Food
                            IdTable={ this.state.currentTable}
                            foodStore={ this.props.foodStore}
                            
                            >

                            </Food>
                        </Col>
                        {/* Bill */}
                        <Col  style={{width: "30%" }}>
                            <Card style={{width: "100%"}}>
                                bill
                            </Card>
                        </Col>
                    </Row>
                </Card>
        )
    }
}
export default Table;