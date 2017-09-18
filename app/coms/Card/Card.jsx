import React, { Component } from 'react';

class Card extends Component {
    componentWillMount() {
        debugger
        this.props.history.push('/app/detail')
    }

        render(){

        return(

            <div>
                <h1>Card</h1>
            </div>

        )
    }

}

export default Card;