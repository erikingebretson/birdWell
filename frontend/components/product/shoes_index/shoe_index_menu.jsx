import React from 'react';
import { Link } from 'react-router-dom';

class ShoeIndexMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    createNav() {
        if ( this.props.path === '/shoes' ) {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes'>New Arrivals</Link></li>
                <li><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li><Link to='/shoes/mens'>Men's Shoes</Link></li>
            </ul>
        } else if ( this.props.path === '/shoes/mens' ) {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes/mens'>Men's Shoes</Link></li>
                <li><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li ><Link to='/shoes'>New Arrivals</Link></li>
            </ul>
        } else if (this.props.path === '/shoes/womens' ) {
            return <ul className="menu-nav" >
                <li className="selected-cat"><Link to='/shoes/womens'>Women's Shoes</Link></li>
                <li ><Link to='/shoes/mens'>Men's Shoes</Link></li>
                <li ><Link to='/shoes'>New Arrivals</Link></li>
            </ul>
        }
    } 
    
    render() {
        return (
            <div>
                <h3 className="home"><Link to='/'>Home</Link> / {this.props.path === '/shoes' ? 'New Arrivals' : this.props.path === '/shoes/mens' ? "Men's Shoes" : "Women's Shoes" } </h3>
                {this.createNav()}
                <br />
                <h3 className="filter-prod" >Filter By:</h3>
                <ul>
                    <li>Functionality</li>
                    <li>Coming soon...</li>
                </ul>

            </div>
        )
    }
}

export default ShoeIndexMenu;