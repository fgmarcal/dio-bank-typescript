import React from 'react';
import { Button, Form, Input } from 'antd';
import { db } from '../../database/database';
import { useNavigate } from 'react-router-dom';


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {

    const navigate = useNavigate()

    const onFinish = (values: FieldType) => {
        const {username, password} = values;
        for(let i = 0; i < db.length; i++){
            if(username === db[i].user && password === db[i].password){
                return navigate(`/account/:${username}`);
            }else{
                onFinishFailed("Bad username/password")
            }
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        alert(errorInfo)
    };
    
    
    return  (   

  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" >
        Entrar
      </Button>
    </Form.Item>
  </Form>
)};

export default Login;