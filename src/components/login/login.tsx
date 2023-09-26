import React, { useContext, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { db } from '../../database/database';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';


type FieldType = {
    username?: string;
    password?: string;
};

const Login: React.FC = () => {

    const {logged, username} = useContext(AppContext)
    const [login, setLogin] = useState(logged)
    const [user, setUser] = useState(username)

    const navigate = useNavigate()

    const validate = (values:FieldType) =>{
      const {username, password} = values;
      const found = db.find((e)=> username === e.user && password === e.password) 
      found ? setLogin(true) : setLogin(false);
      console.log(found)
    }

    const onFinish = async (values: FieldType) => {
        validate(values);
        const username = values.username;
        if(login && username){
          setUser(username);
          navigate(`/account/:${user}`);
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

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" >
        Entrar
      </Button>
    </Form.Item>
  </Form>
)};

export default Login;