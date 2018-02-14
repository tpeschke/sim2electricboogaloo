import React, { Component } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('/api/students').then(res => {
            this.setState({ students: res.data })
        })
    }

    render() {

        var {students} = this.state

        if (students) {
          var studentList = students.map(val => {
            return  <div key={val.id}>
                        <Link to={'/' + val.id}>{val.name}</Link>
                    </div>
          })
        }

        return (
            <div>
                {studentList}
            </div>
        )
    }
}