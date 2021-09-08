import React from 'react';
import { Link } from 'react-router-dom'

const Footer = (props) => {

    return (
        <div >
            <div className="footer-connect">
                <div className="connect-content" >
                    <h3>Connect with Erik:</h3>
                    <div>
                        <a href="https://github.com/erikingebretson" target="_blank"><img src="images/GitHub-Mark-64px.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/erik-ingebretson/" target="_blank"><img src="images/LI-In-Bug.png" alt="" /></a>
                        <a href="mailto:erikingebretson@gmail.com" ><img src="images/email-icon.png" alt="" /></a>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Footer;