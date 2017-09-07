import React, { Component } from 'react';

class Detail extends Component {

    componentWillMount() {

        console.log(this.props.match.params.id)
    }

    render(){

        return(

            <div>
                <h1>Detail</h1>
            </div>

        )
    }

}

export default Detail;