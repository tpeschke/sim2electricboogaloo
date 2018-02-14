import React, { Component } from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom'

export default class StudentView extends Component {
    constructor() {
        super()

        this.state = {
            classes: []
        }
    }

    componentDidMount() {
        axios.get('/api/student/query',).then(res => {
            this.setState({ students: res.data })
        })

        axios.get(`/api/student/${this.props.match.params.page}`).then(res => {
            this.setState({ classes: res.data })
            console.log(res.data)
        })
    }

    render() {

        var {classes} = this.state

        if (classes) {
          var classesList = classes.map((val, i) => {
            return  <div key={i}>
                        <p>{val.classname}</p>
                    </div>
          })
        }

        return (
            <div>
                {classesList}
            </div>
        )
    }
}