/*
import React from 'react'
import ReactDOM from 'react-dom'

import RouteConfigExample from '../../router/RouterConfig.jsx'
import User from '../../pages/user/index.jsx'
require('../../pages/user/index.jsx')
require('../../pages/Licai/index.jsx')
ReactDOM.render(
    <RouteConfigExample />,
    document.getElementById("app")
)*/
import React from 'react'
import ReactDOM from 'react-dom'
import Rouder from '../../router.jsx'
import { createStore } from 'redux';
import reducers from '../reducers';
import {Provider} from 'react-redux'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

ReactDOM.render(
    (<Provider store={createStore(reducers)} >
        <Rouder/>
    </Provider>
    )
    ,document.getElementById("app") )