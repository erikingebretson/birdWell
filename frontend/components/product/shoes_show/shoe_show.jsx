import React from 'react';

class ShoeShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchProduct()
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <div>
                <h1>I am a shoe</h1>
                <h2>{this.props.shoe.productName}</h2>
            </div>
        )   
    }
}

export default ShoeShow;