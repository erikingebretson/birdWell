import React from 'react';
import ShoeGridItem from './shoe_grid_item';
import ShoeIndexMenu from './shoe_index_menu';
import { Link } from 'react-router-dom';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allShoes: [],
            shoeFilter: 'all'
        }
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    shoeFilter() {
        let filtered = [];
        this.props.shoes.forEach((shoe, idx) => {
            if (idx % 4 === 0 && shoe.detail1 !== null) {
                if (this.state.shoeFilter === 'all') {
                    filtered.push(shoe)
                } else if (this.state.shoeFilter === 'Runners') {
                    if (shoe.productName.includes('Runners') || shoe.productName.includes('Dashers')) {
                        filtered.push(shoe)
                    }
                } else if (shoe.productName.includes(this.state.shoeFilter)) {
                    filtered.push(shoe)
                }
            }
        })
        
        return this.buildGrid(filtered)
    }

    buildGrid(product) {
        return product.map( (shoe, idx) => (
            <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />
        ))

        // return this.props.shoes.map( (shoe, idx) => {
        //     if (idx % 4 === 0 && shoe.detail1 !== null) {
        //         return <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />
        //    }
        // })
        // console.log(filtered)
        
    }

    // buildGrid() {
        // return this.props.shoes.map( (shoe, idx) => {
        //     if (idx % 4 === 0 && shoe.detail1 !== null) {
        //         return <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} />
        //    }
        // })
    // }

    // indexMenu() {
    //     return (
    //         <ShoeIndexMenu path={this.props.path} />
    //     )
    // }
    createNav() {
        if (this.props.path === '/shoes') {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes'>New Arrivals</Link></li>
                <li><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li><Link to='/shoes/mens'>Men's Shoes</Link></li>
            </ul>
        } else if (this.props.path === '/shoes/mens') {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes/mens'>Men's Shoes</Link></li>
                <li><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li ><Link to='/shoes'>New Arrivals</Link></li>
            </ul>
        } else if (this.props.path === '/shoes/womens') {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li ><Link to='/shoes/mens'>Men's Shoes</Link></li>
                <li ><Link to='/shoes'>New Arrivals</Link></li>
            </ul>
        }
    }


    render() {
        if (Object.keys(this.props.shoes).length === 0) return null;

        return (
            <div className="main-root">
                <div className="plp-page-root" >
                    <div className="plp-menu" >
                        {/* {this.indexMenu()} */}
                        <div>
                            <h3 className="home"><Link to='/'>Home</Link> / {this.props.path === '/shoes' ? 'New Arrivals' : this.props.path === '/shoes/mens' ? "Men's Shoes" : "Women's Shoes"} </h3>
                            {this.createNav()}
                            <br />
                            <h3 className="filter-prod" >Filter By:</h3>
                            <ul>
                                <li><button onClick={() => this.setState({ shoeFilter: 'Runners' })}>Running</button></li>
                                <li><button onClick={() => this.setState({ shoeFilter: 'Loungers' })}>Casual</button></li>
                                <li><button onClick={() => this.setState({ shoeFilter: 'Wool' })}>Wool</button></li>
                                {/* <li>Coming soon...</li> */}
                            </ul>

                        </div>

                    </div>
                    <div className="plp-product-root">
                        {this.shoeFilter()}
                        {/* {this.buildGrid()} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoeIndex;