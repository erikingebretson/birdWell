import React from 'react';
import { Link } from 'react-router-dom';

class ShoeIndexMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Home /</h3>
                <ul>
                    <li><Link to='/shoes'>Men's Shoes</Link></li>
                    <li><Link to='/shoes'>Women's Shoes</Link></li>
                </ul>
                <br />
                <h3>Filter By:</h3>
                <ul>
                    <li>things</li>
                    <li>stuff</li>
                    <li>colors</li>
                </ul>

            </div>
        )
    }
}

export default ShoeIndexMenu;