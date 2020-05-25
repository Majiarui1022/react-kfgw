import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'




// import Home from '@/components/Home'

import Home from './components/Home'



export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Home}/>
                </Switch>
            </div>
        )
    }
}
