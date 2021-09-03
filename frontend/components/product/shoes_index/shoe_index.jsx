import React from 'react';
import ShoeGridItem from './shoe_grid_item';
import ShoeIndexMenu from './shoe_index_menu'

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allShoes: this.props.shoes
        }
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    buildGrid() {
        // let filtered = [];
        // this.state.shoes.forEach( (shoe, idx) => {
        //     if (idx % 4 === 0 && shoe.detail1 !== null) {
        //         filtered.push(<ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />)
        //    }
        // })

        return this.props.shoes.map( (shoe, idx) => {
            if (idx % 4 === 0 && shoe.detail1 !== null) {
                return <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />
           }
        })
        // console.log('hello')
        // return filtered
    }

    indexMenu() {
        return (
            <ShoeIndexMenu path={this.props.path} />
        )
    }


    render() {
        if (Object.keys(this.props.shoes).length === 0) return null;

        return (
            <div className="main-root">
                <div className="plp-page-root" >
                    <div className="plp-menu" >
                        {this.indexMenu()}
                    </div>
                    <div className="plp-product-root">
                        {this.buildGrid()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoeIndex;