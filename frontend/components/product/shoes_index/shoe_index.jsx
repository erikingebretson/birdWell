import React from 'react';
import ShoeGridItem from './shoe_grid_item';
import ShoeIndexMenu from './shoe_index_menu'

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

    indexMenu() {
        return (
            <ShoeIndexMenu props={this.props} />
        )
    }

    render() {
        if (Object.keys(this.props.shoes).length === 0) return null;

        return (
            <div className="plp-page-root" >
                <div className="plp-menu" >
                    {this.indexMenu()}
                </div>
                <div className="plp-product-root">
                    {this.buildGrid()}
                </div>
            </div>
        )
    }
}

export default ShoeIndex;