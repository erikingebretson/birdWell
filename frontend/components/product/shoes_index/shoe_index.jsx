import React from 'react';
import ShoeGridItem from './shoe_grid_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    buildGrid() {
        return this.props.shoes.map( shoe => (
            <ShoeGridItem key={shoe.id} shoe={shoe} />
        ))
    }

    render() {
        if (Object.keys(this.props.shoes).length === 0) return null;

        return (
            <div>
                {this.buildGrid()}
            </div>
        )
    }
}

export default ShoeIndex;