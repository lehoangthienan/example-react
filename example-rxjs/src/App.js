import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd'
import { of } from 'rxjs'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const source = ['Adam', 'Brian', 'Christine'];
const names$ = of(source);

function App() {

  const [names, setNames] = useState()

  useEffect(() => {
    const subscription = names$.subscribe(setNames)
    return () => subscription.unsubscribe()
  }, [])

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

console.log(names)

  return (
    <div>
      {
        names && names.map(name => <p>{name}</p>)
      }
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default App;
