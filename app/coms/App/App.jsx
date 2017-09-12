import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory'

const history = createHistory({
    forceRefresh: true
})
class App extends Component {

    componentWillMount() {

    }

    check() {
      history.push('/app/card', {some: 'state'})
    }

    render() {

        return (

            <div>
                <h1>APwwP</h1>
                <button onClick={() => this.check()}>sdf</button>
            </div>

        )
    }

}

export default App;