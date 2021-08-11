import React from 'react';
import ShoeGridItem from './shoe_grid_item';
import ShoeIndexMenu from './shoe_index_menu'

class WomenShoeIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    buildGrid() {
        return this.props.shoes.map((shoe, idx) => {
            if (idx % 4 === 0 && shoe.gender === "women" && shoe.detail1 !== null) {
                return <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />
            }
        })
    }

    indexMenu() {
        return (
            <ShoeIndexMenu path={this.props.path} />
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

export default WomenShoeIndex;