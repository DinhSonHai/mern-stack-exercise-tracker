import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExercisesList() {
    const [exercisesList, setExerciseList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then (res => {
            setExerciseList(res.data);
        })
    }, []);

    return (
        <div className="ExercisesList">
            <p>You are on the exercises list component</p>
        </div>
    );
}