import React, { useState, useEffect } from 'react';

export default function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers([...users, 'test user'])
        console.log(users)
    }, [])

    return (
        <div className="CreateExercise">
            { users.map(user => <p>{user}</p>)}
            <p>You are on the create exercise component</p>
        </div>
    );
}