import React from 'react'
import ReactDOM from 'react-dom'

import RouteConfigExample from '../../router/RouterConfig.jsx'
import User from '../../pages/user/index.jsx'
require('../../pages/user/index.jsx')
require('../../pages/Licai/index.jsx')
ReactDOM.render(
    <User />,
    document.getElementById("app")
)