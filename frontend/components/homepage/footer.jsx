import React from 'react';
import { Link } from 'react-router-dom'

const Footer = (props) => {

    return (
        <div className="footer-root">
            <div className="footer-shop">
                <p>Shop</p>
                <Link to="/" >Homepage</Link>
                <Link to="/account" >Account</Link>
                <Link to="/shoes" >New Arrivals</Link>
                <Link to="/shoes/womens" >Men's Shoes</Link>
                <Link to="/shoes/mens" >Women's Shoes</Link>
            </div>
            <div className="accredidation">
                <p>Credits</p>
                <div>Account Icon made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry" target="_blank" >Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Cart Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Arrow Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons" target="_blank">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    )
}

export default Footer;