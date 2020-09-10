import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, DatePicker } from 'antd';

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

export default function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date('YYYY-MM-DD[T00:00:00.000Z]'));
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers([...users, 'test user'])
        console.log(users)
    }, [])

    const onFinish = values => {
        console.log('Success:', values);
        values.Date = date;
        console.log('Success:', values);
        // const exercise = {
        //     username: username,
        //     description: description,
        //     duration: duration,
        //     date: date,
        // };

        // console.log(exercise);
        // window.location = '/';
      };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onInputUsername = e => {
        setUsername(e.target.value);
    }

    const onInputDescription = e => {
        setDescription(e.target.value);
    }

    const onInputDuration = e => {
        setDuration(Number(e.target.value));
        console.log(date)
    }

    const onChangeDate = (date, dateString) => {
        setDate(date.format('YYYY-MM-DD[T00:00:00.000Z]'));
    }

    return (
        <div className="CreateExercise">
            <h1 style={{textAlign: "center"}}>Create new exercise log</h1>
            <Form 
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <Input onInput={onInputUsername}/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="Description"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your description!',
                    },
                    ]}
                >
                    <Input onInput={onInputDescription}/>
                </Form.Item>

                <Form.Item
                    label="Duration"
                    name="Duration"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your duration!',
                    },
                    ]}
                >
                    <Input  onInput={onInputDuration}/>
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="Date"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your date!',
                    },
                    ]}
                >
                    <DatePicker onChange={onChangeDate}/>
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