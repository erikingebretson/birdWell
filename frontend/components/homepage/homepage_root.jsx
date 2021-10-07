import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inc: 0
        }

        this.length = 0;
        this.dir = '';
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllProduct()
        if (this.props.path.cartId !== undefined) { 
            this.props.fetchSharedCart(this.props.path.cartId)
        }
    }

    toggleOn(id) {
        let el = document.getElementsByClassName(id)
        Object.values(el)[0].style.opacity = '1';
        Object.values(el)[0].style.visibility = 'visible';
    }

    toggleOff(id) {
        let el = document.getElementsByClassName(id)
        // Object.values(el)[0].style.display = 'none'
        Object.values(el)[0].style.visibility = 'hidden'
        Object.values(el)[0].style.opacity = '0';
    }

    buildCarousel() {
        let shoes = Object.values(this.props.shoes)
        let carouselData = []
        shoes.forEach( (shoe, idx) => {
            if ( idx % 4 === 0 && shoe.detail1 !== null ) {
                carouselData.push(shoe)
        }})

        // optional logic to choose length of carousel cards

        this.length = carouselData.length
        let num1 = this.state.inc
        let num2 = this.state.inc + this.length
        let cards = []
        
        if (this.dir === 'inc') {
            if (num2 >= this.length) {
                cards = carouselData.slice(num1).concat(carouselData.slice(0,(num2 % this.length)))
            } else {
                cards = carouselData.slice(num1, (num2))
            }
        } else {
            if (num2 >= this.length) {
                cards = carouselData.slice(num1).concat(carouselData.slice(0, (num2 % this.length)))
            } else {
                cards = carouselData.slice(num1, (num2))
            }
        }

        return cards.map(shoe => (
            <div key={shoe.id} className="show-carousel-card"
                 onMouseLeave={() => this.toggleOff(shoe.productName.concat(shoe.gender).replace(/' '/g, '-'))} >
                <div className="carousel-img">
                    <img onMouseEnter={() => this.toggleOn(shoe.productName.concat(shoe.gender).replace(/' '/g, '-'))} 
                         className="carousel-hero-img" src={shoe.photoUrls[1]} alt="" />
                    <div className={`${shoe.productName.concat(shoe.gender).replace(/' '/g, '-')} carousel-overlay card-no-show`}>
                        <Link className='hover-button' to={`/shoes/${shoe.id}`}>Shop <br />{shoe.productName}</Link>
                    </div>
                </div>
                <div className="carousel-product-detail">
                    <Link to={`/shoes/${shoe.id}`}>{shoe.productName}</Link>
                    <p>{shoe.detail2}</p>
                </div>
            </div>
        ))
        
        // return cards.map( shoe => (
        //     <div key={shoe.id} className="show-carousel-card">
        //         <div className="carousel-img">
        //             <img className="carousel-hero-img" src={shoe.photoUrls[1]} alt="" />
        //             <div className="carousel-overlay card-no-show" >
        //                     <Link className='hover-button' to={`/shoes/${shoe.id}`}>Shop Now</Link>
        //             </div>
        //         </div>
        //         <div className="carousel-product-detail">
        //             <Link to={`/shoes/${shoe.id}`}>{shoe.productName}</Link>
        //             <p>{shoe.detail2}</p>
        //         </div>
        //     </div>
        // ))
    }

    incrementCarousel() {
        this.dir = 'inc'
        if (this.state.inc + 1 < this.length ) {
            this.setState({inc: this.state.inc += 1 })
        } else {
            this.setState({ inc: 0 })
        }
        this.buildCarousel()
    }

    decrementCarousel() {
        if ( this.state.inc - 1 >= 0 ) {
            this.setState({ inc: this.state.inc -= 1 })
        } else {
            this.setState({ inc: this.length-1 })
        }
        this.buildCarousel()
    }
    turnCartOff() {
        let cart = document.querySelector(".cart-root")
        cart.classList.remove("cart-on")
    }

    render() {    

        return (
            <div className="main-root" onClick={() => this.turnCartOff()} >
            <div className="homepage-root" >
                <div className="hero-root">
                    <div className="hero">
                        <img src="images/hero.jpeg" alt="BirdWell" />
                        <div className="content-on-plate">
                            <div className="hero-headline" >
                                <h1>Earth-Friendly. <br></br>Run-Ready.</h1>
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
                        <h2>Our Favorites</h2>
                    </div>
                    <div className="carousel">
                        {this.buildCarousel()}
                    </div>
                    <a className="right-carousel" onClick={() => this.incrementCarousel()} ><img src="images/right-arrow.png" alt="" /></a>
                    <a className="left-carousel" onClick={() => this.decrementCarousel()} ><img src="images/left-arrow.png" alt="" /></a>
                </div>
            </div>

            </div>
        )
    }
}

export default Homepage;    