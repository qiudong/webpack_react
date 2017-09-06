import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const CustomLinkExample = () => (

    <Router>
        {/*UI组件*/}
        <div>
            <Com active={true} label="Home" to="/"></Com>
            <Com label="About" to="/about"></Com>
            <Com label="Next" to="/next"></Com>

            <hr/>
            {/*路由组件*/}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/next" component={Next}/>

        </div>

    </Router>

)

//ui组件
const Com = ({to, label, active}) => (
    <Route path={to} exact={active} children={({match}) => (
        <div className={match ? 'active' : ''}>
            {match ? '>' : ''}<Link to={to}>{label}</Link>
        </div>
    )
    }/>)


//路由跳转后组件
const Home = () => (
    <h1>Home</h1>
)
const About = () => (
    <h1>About</h1>
)
const Next = () => (
    <h1>Next</h1>
)
export default CustomLinkExample