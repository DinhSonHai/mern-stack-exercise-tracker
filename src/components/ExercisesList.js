import React, { useState, useEffect } from 'react';
import axios from 'axios';
import antd from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import { Table, Checkbox } from 'antd';

export default function ExercisesList() {
    const [exercisesList, setExerciseList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then (res => {
            setExerciseList(res.data);
        })
    }, []);

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
          dataIndex: 'date',
        },
        {
          title: '#',
          dataIndex: '_id',
          render: _id => (
            <div>
                <Link to={`/edit/${_id}`}>Edit</Link> | <a href="#" onClick={() => deleteExercise(_id)}>Delete</a>
            </div>
          ),
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

    function deleteExercise(id) {
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