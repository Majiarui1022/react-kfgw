import React from 'react'
import {render} from 'react-dom'

import './index.scss'


//BrowserRouter HashRouter

import { BrowserRouter as Router  , Route} from 'react-router-dom'

import App from './App'

render (
    <Router>
        <App />
    </Router>,
    document.querySelector("#root")
)