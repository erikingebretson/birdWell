import React from 'react';
import ShoeGridItem from './shoe_grid_item';
import { Link } from 'react-router-dom';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allShoes: this.props.shoes,
            shoeFilter: 'All',
            filtered: 'All',
            everyday: false,
            running: false,
            cool_weather: false,
            all: true,
        }
        
    }

    componentDidMount() {
        this.props.fetchAllProduct()
    }

    componentDidUpdate() {
        if (this.state.filtered === 'y') this.setState({ filtered: 'n' })
    }

    shoeFilter() {
        let filtered = [];
        this.props.shoes.forEach((shoe, idx) => {
            if (idx % 4 === 0 && shoe.detail1 !== null) {
                if (this.state.shoeFilter === 'All') {
                    filtered.push(shoe)
                } else if (this.state.shoeFilter === 'Runners') {
                    if (shoe.productName.includes('Runners') || shoe.productName.includes('Dashers')) {
                        filtered.push(shoe)
                    }
                } else if (this.state.shoeFilter === 'Everyday') {
                    if (shoe.productName.includes('Loungers') || shoe.productName.includes('Toppers') || shoe.productName.includes('Pipers')) {
                        filtered.push(shoe)
                    }
                } else if (this.state.shoeFilter === 'Cool Weather') {
                    if (shoe.productName.includes('Wool')) {
                        filtered.push(shoe)
                    }
                }
            }
        })
        return this.buildGrid(filtered)
    }

    buildGrid(product) {
        if (product === undefined ) return null
        return product.map( (shoe, idx) => (
            <ShoeGridItem key={idx} shoe={shoe} allShoes={this.props.shoes} filtered={this.state.filtered}/>
        ))
    }

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

    checkFilter(category, selector) {
        if (selector === 'everyday') {
            this.setState({ filtered: 'y', shoeFilter: 'Everyday', everyday: true, runners: false, coolWeather: false, all: false })
        } else if (selector === 'runners') {
            this.setState({ filtered: 'y', shoeFilter: 'Runners', runners: true, everyday: false, all: false, coolWeather: false })
        } else if (selector === 'coolWeather') {
            this.setState({ filtered: 'y', shoeFilter: 'Cool Weather', coolWeather: true, runners: false, all: false, everyday: false })
        } else if (selector === 'all') {
            this.setState({ filtered: 'y', shoeFilter: 'All', all: true, everyday: false, runners: false, coolWeather: false })
        }
    }

    render() {
        if (Object.keys(this.props.shoes).length === 0) return null;

        return (
            <div className="main-root">
                <div className="plp-page-root" >
                    <div className="plp-menu" >
                    <div>
                        <h3 className="home"><Link to='/'>Home</Link> / {this.props.path === '/shoes' ? 'New Arrivals' : this.props.path === '/shoes/mens' ? "Men's Shoes" : "Women's Shoes"} </h3>
                        {this.createNav()}
                        <br />
                        <h3 className="filter-prod" >Filter By:</h3>
                        <ul className="filter-buttons">
                            <li><label >
                                <span className="everyday"></span>
                                <input type="checkbox" className="everyday" checked={this.state.everyday} onChange={() => this.checkFilter('Everyday', 'everyday')}></input>
                                Everyday
                            </label></li>
                            <li><label >
                                <input type="checkbox" className="runners" checked={this.state.runners} onChange={() => this.checkFilter('Runners', 'runners')}></input>
                                Running
                            </label></li>
                            <li><label>
                                <input type="checkbox" className="cool-weather" checked={this.state.coolWeather} onChange={() => this.checkFilter('Cool Weather', 'coolWeather')}></input>
                                Cool Weather
                            </label></li>
                            <li><label>
                                <input type="checkbox" className="all" checked={this.state.all} onChange={() => this.checkFilter('All', 'all')}></input>
                                All
                            </label></li>
                        </ul>
                    </div>
                    </div>
                    <div className="plp-product-root">
                        {this.shoeFilter()}
                        {this.buildGrid()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoeIndex;