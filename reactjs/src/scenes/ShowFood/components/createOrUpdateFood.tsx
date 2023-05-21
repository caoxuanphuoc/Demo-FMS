import * as React from 'react';

import { Input, Modal, Tabs, Form } from 'antd';
import { L } from '../../../lib/abpUtility';
import rules from './createOrUpdateFood.validation';
import { FormInstance } from 'antd/lib/form';

const TabPane = Tabs.TabPane;

export interface ICreateOrUpdateFoodProps {
  visible: boolean;
  onCancel: () => void;
  modalType: string;
  onCreate: () => void;
  formRef: React.RefObject<FormInstance>;
}

class CreateOrUpdateFood extends React.Component<ICreateOrUpdateFoodProps> {
  state = {
    confirmDirty: false,
  };

  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.formRef.current;
    
    if (value && value !== form!.getFieldValue('password')) {
      return Promise.reject('Two passwords that you enter is inconsistent!');
    }
    return Promise.resolve();
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const { validateFields, getFieldValue } = this.props.formRef.current!;

    this.setState({
      confirmDirty: true,
    });

    if (value && this.state.confirmDirty && getFieldValue('confirm')) {
      validateFields(['confirm']);
    }

    return Promise.resolve();
  };

  render() {
  

    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 6 },
        md: { span: 6 },
        lg: { span: 6 },
        xl: { span: 6 },
        xxl: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 },
        md: { span: 18 },
        lg: { span: 18 },
        xl: { span: 18 },
        xxl: { span: 18 },
      },
    };
   

    const { visible, onCancel, onCreate } = this.props;

   

    return (
      <Modal visible={visible} cancelText={L('Cancel')} okText={L('OK')} onCancel={onCancel} onOk={onCreate} title={'Food'} destroyOnClose={true}>
        <Form ref={this.props.formRef}>
          <Tabs defaultActiveKey={'foodInfo'} size={'small'} tabBarGutter={64}>
            <TabPane tab={'Food'} key={'foodInfo'}>
              <Form.Item label={L('Name')} {...formItemLayout} name={'name'} rules={rules.name}>
                <Input />
              </Form.Item>
              <Form.Item label={L('Id')} {...formItemLayout} name={'id'} rules={rules.id}>
                <Input />
              </Form.Item>
              <Form.Item label={L('Description')} {...formItemLayout} name={'description'} rules={rules.description}>
                <Input />
              </Form.Item>
              <Form.Item label={L('Price')} {...formItemLayout} name={'price'} rules={rules.price }>
                <Input />
              </Form.Item>
             
            </TabPane>
           
          </Tabs>
        </Form>
      </Modal>
    );
  }
}

export default CreateOrUpdateFood;
