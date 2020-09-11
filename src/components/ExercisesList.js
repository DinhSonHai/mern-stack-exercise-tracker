import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'antd/dist/antd.css';

import { Table, Radio, Divider, Checkbox } from 'antd';

const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
    },
  ];
  
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

export default function ExercisesList() {
    const [exercisesList, setExerciseList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then (res => {
            setExerciseList(res.data);
        })
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        setExerciseList(exercisesList.filter(e => e._id !== id));
    };

    return (
        <div className="ExercisesList">
            {/* { exercisesList.map(exercise => <p>{ exercise.description }</p>) } */}
            <Table
                rowSelection={{
                type: Checkbox,
                ...rowSelection,
                }}
                columns={columns}
                rowKey="_id"
                dataSource={exercisesList}
            />
        </div>
    );
}