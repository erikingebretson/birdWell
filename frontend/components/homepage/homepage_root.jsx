import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {


    componentDidMount() {
        this.props.fetchAllProduct()
    }

    render() {    
        return (
            <div className="homepage-root">
                <div className="hero-root">
                    <div className="hero">
                        
                                <img src="images/hero.jpeg" alt="BirdWell" />
                            
                        <div className="content-on-plate">
                            <div className="hero-headline" >
                                <p>Earth-Friendly.</p>
                                <p>Run-Ready.</p>
                            </div>
                            <div className="hero-links" >
                                <Link to='shoes/mens' >Shop Men</Link>
                                <Link to='shoes/womens' >Shop Women</Link>
                            </div>
                            <div className="hero-banner" >
                                
                            </div>
                        </div>
                    </div>
                    <div className="shipping-banner" >
                        <p>Free shipping on orders over $50. Free returns.</p>
                    </div>
                </div>
                <div className="secondary" >
                    <div className="secondary-header">
                        <p>Our Favorites</p>
                    </div>
                    <div className="carousel">

                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;    