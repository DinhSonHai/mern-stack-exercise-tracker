import React, { Component } from 'react';
import axios from 'axios';

import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};

export default class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
        this.onInputUsername = this.onInputUsername.bind(this);
    }

    onFinish(values) {
        console.log('Success:', values);
        axios.post('http://localhost:5000/users/add', values)
            .then(res => console.log(res.data));
        // const user = {
        //     username: this.username,
        // };

        // console.log(user);
        //window.location = '/';
      };
    
    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

    onInputUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return(
            <div className="CreateExercise">
            <h1 style={{textAlign: "center"}}>Create new user log</h1>
            <Form 
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input onInput={this.onInputUsername}/>
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
}