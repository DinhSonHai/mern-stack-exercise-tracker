import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Input, Button, DatePicker } from 'antd';
import { useParams } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import moment from 'moment';

export default function EditExercise() {
    const [username, setUsername] = useState('123');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    const [form] = useForm();

    useEffect(() => {
        // setUsers([...users, 'test user'])
        // console.log(users)
        axios.get('http://localhost:5000/exercises/' + id)
            .then(res => {
                setUsername(res.data.username);
                setDescription(res.data.description);
                setDuration(res.data.duration);
                setDate(res.data.date);
                // setUsers(res.data.map(user => user.username));
                form.setFieldsValue({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: moment(res.data.date),
                });
            })
    }, [])

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

    const onFinish = values => {
        console.log('Success:', values);
        axios.put('http://localhost:5000/exercises/edit/' + id , values)
            .then(res => console.log(res.data));
        window.location = '/';
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
    }

    const onChangeDate = (date, dateString) => {
        // setDate(date.format('YYYY-MM-DD[T00:00:00.000Z]'));
        setDate(date);
    }

    return (
        <div className="EditExercise">
            <h1 style={{textAlign: "center"}}>Create new exercise log</h1>
            <Form 
                {...layout}
                form={form}
                name="basic"
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
                    name="description"
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
                    name="duration"
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
                    name="date"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your date!',
                    },
                    ]}
                >
                    <DatePicker onChange={onChangeDate}/>
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