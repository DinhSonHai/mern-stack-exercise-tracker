import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import 'antd/dist/antd.css';

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            current: 'exercises'
        };
    }
    handleClick = e => {
        this.setState({ current: e.key });
    }
    render() {
        const { current } = this.state;
        return (
            <div className="Navbar">
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="exercises">
                        <Link to='/'>Exercise Tracker</Link>
                    </Menu.Item>
                    <Menu.Item key="createExercise">
                        <Link to='/create'>Create Exercise Log</Link>
                    </Menu.Item>
                    <Menu.Item key="createUser">
                        <Link to='/user'>Create User</Link>
                    </Menu.Item>
                    <Menu.Item key="test">
                        <Link to='/edit/:id'>Test</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}