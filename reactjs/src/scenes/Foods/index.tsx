import * as React from 'react';
import { observer } from "mobx-react";
//import Stores from '../../stores/storeIdentifier';
import FoodStore from '../../stores/foodStore';
import AppComponentBase from '../../components/AppComponentBase';
import { GetAllFoodOutput } from '../../services/food/dto/getAllFoodOutput';
import { L } from '../../lib/abpUtility';
import { Button, Card, Col, Row, Table } from 'antd';
import { GetAllOrderDetail } from '../../services/orderDetail/dto/getAllOrderDetail';
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
  dataOrder: GetAllOrderDetail[]
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
  initDataOrder: GetAllOrderDetail = {
    quantity: 0,
    name: "string",
    price: 0,
    id: 0
  }
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    userId: 0,
    filter: '',
    dataFood: [this.initData],
    dataOrder: [this.initDataOrder]
  };
  async componentDidMount() {
    await this.getAll();
    var RawData = localStorage.getItem(this.props.IdTable.toString())
    var MainData = []
    if (RawData === null) {
      this.setState({ dataOrder: [] })
    } else {
      var dataJson = JSON.parse(RawData);
      for (var i = 0; i < dataJson.length; i++) {
        var temp: GetAllOrderDetail = {
          id: dataJson[i].id,
          name: dataJson[i].name,
          price: dataJson[i].price,
          quantity: dataJson[i].quantity
        }
        MainData.push(temp)
      }
      this.setState({ dataOrder: MainData })
    }

  }
  async getAll() {
    await this.props.foodStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
  }
  handlePlus = (item: any) => {
    var temp = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    }
    console.log(temp.id);

    var key = this.props.IdTable.toString()
    var data = localStorage.getItem(key)
    var listdata = []
    if (data === null) {
      listdata.push(temp)
      localStorage.setItem(key, JSON.stringify(listdata))
      var upState = localStorage.getItem(key)
      this.setState({ dataOrder: upState === null ? [] : JSON.parse(upState) })
    }
    else {
      listdata = JSON.parse(data)
      var OkPush = 0;
      for (var i = 0; i < listdata.length; i++) {
        console.log("listdata: ", listdata[i]);
        if (temp.id === listdata[i].id) {
          console.log("da tung");

          listdata[i].quantity = listdata[i].quantity + 1;
          console.log("da tung2", listdata[i].quantity);
          OkPush = 1;
        }
      }
      if (OkPush === 0) {
        listdata.push(temp)
      }
      localStorage.setItem(key, JSON.stringify(listdata))
    }

    var data2 = localStorage.getItem(key)
    //console.log(data2)
    if (data2 !== null) {
      var data3 = JSON.parse(data2)
      var StandData = []
      for (var ind = 1; ind < data3.length; ind++) {
        var res: GetAllOrderDetail = {
          id: data3[ind].id,
          name: data3[ind].name,
          price: data3[ind].price,
          quantity: data3[ind].quantity
        }
        StandData.push(res)
      }
      console.log("Stand: ", StandData)
      this.setState({ dataOrder: StandData })
      console.log("asdsad", this.state.dataOrder)
    }
  }
  handleMinus(item: any) {
    console.log(item);
    localStorage.clear()
  }
  Pay =() =>{
    this.setState({ dataOrder :[]})
    localStorage.removeItem(this.props.IdTable.toString())
    alert("Thanh toán thành công")
  }
  public render() {
    // console.log("food ", this.props.foodStore.foods === undefined ? "null" : this.props.foodStore.foods.items);
    const dataShow = this.props.foodStore.foods === undefined ? [] : this.props.foodStore.foods.items.sort((x, y) => x.id - y.id)
    const columns = [
      { title: L('Id'), dataIndex: 'id', key: 'Id', width: '5%', render: (text: string) => <div>{text}</div> },
      { title: L('Food Name'), dataIndex: 'name', key: 'name', width: '15%', render: (text: string) => <div>{text}</div> },
      { title: L('Description'), dataIndex: 'description', key: 'description', width: '15%', render: (text: string) => <div>{text}</div> },
      { title: L('Price'), dataIndex: 'price', key: 'price', width: '15%', render: (text: string) => <div>{text}</div> },
      {
        title: L('Actions'),
        width: '15%',
        render: (text: string, item: any) => (
          <div style={{ display: 'flex' }}>
            <button style={{ height: '25px', width: '25px' }} onClick={e => this.handleMinus(item)}>-</button>
            <p style={{ paddingLeft: '10px', paddingRight: "10px" }}>1</p>
            <button style={{ height: '25px', width: '25px' }} onClick={e => this.handlePlus(item)}>+</button>
          </div>
        ),
      }
    ]
    const columnOrders = [
      { title: L('Name'), dataIndex: 'name', key: 'nameO', width: '46%', render: (text: string) => <div style={{ fontSize: '11px' }}>{text}</div> },
      { title: L('Price'), dataIndex: 'price', key: 'pri', width: '25%', render: (text: string) => <div style={{ fontSize: '11px' }}>{text}</div> },
      { title: L('SL'), dataIndex: 'quantity', key: 'quantity', width: '18%', render: (text: string) => <div style={{ fontSize: '11px' }}>{text}</div> },
      { title: L('Total'), key: 'total', width: '30%', render: (text: string, item: any) => <div style={{ fontSize: '11px' }}>{ item.price * item.quantity}</div> },

    ]
    const tableFooter = (item: any) => {
      var sum = 0;
      this.state.dataOrder.map(e => {
        sum = sum + e.price * e.quantity
      })
      return <div> <Row><p>Thành tiền:</p> <b style={{paddingLeft: '10%'}}> {sum}</b>  <p style={{paddingLeft: '10%'}}>vnđ</p>   </Row>
        <Row>  <Button onClick={this.Pay} style={{backgroundColor : '#1da57a', color:'#ffffff' , marginLeft: '30%'}}> <span>  Thanh toán</span></Button> </Row>
      </div>
    };
    return (
      // <Card>
      <Row style={{ width: '100%' }}>
        {/* menu */}
        <Col
          style={{ width: "65%", marginTop: "3%" }}
        >
          <Table
            rowKey={(record) => record.id.toString()}
            bordered={true}
            columns={columns}
            //pagination={{ pageSize: 10, total: dataShow === undefined ? 0 : dataShow.totalCount, defaultCurrent: 1 }}
            loading={dataShow === undefined ? true : false}
            dataSource={dataShow === undefined ? [] : dataShow}
            scroll={{ y: 500 }}
            pagination={false}

          />
        </Col>
        {/* Bill */}
        <Col style={{ width: "35%", marginTop: "3%" }}>
          <Card style={{ width: "100%", marginLeft: '5%', backgroundColor: '#eef1fa'}}>
            <Col style={{ width: "100%" }}>
              <Row style={{ width: "100%" }}>
                <span style={{ paddingLeft: '40%' }}><h2>Bill Detail</h2></span>
              </Row>
              <Row style={{ width: "100%" }}>
                <Table
                  footer={tableFooter}
                  rowKey={(record) => record.name}
                  //bordered={true}
                  columns={columnOrders}
                  dataSource={this.state.dataOrder === undefined ? [] : this.state.dataOrder}
                  scroll={{ y: 250 }}
                  pagination={false}
                />
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
      // </Card>

    )
  }
}
export default Food;