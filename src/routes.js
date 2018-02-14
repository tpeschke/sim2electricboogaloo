import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home'
import StudentView from './component/StudentView'

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path='/'
                        component={Home} />
                    <Route
                        path='/:page'
                        component={StudentView} />
                </Switch>
            </div>
        )
    }
}