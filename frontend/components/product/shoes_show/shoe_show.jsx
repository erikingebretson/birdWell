import React from 'react';
import { Link } from 'react-router-dom';
import ReviewElement from './review_element';

class ShoeShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            product_name: '',
            size: '',
            colorway: '',
            price: 0,
            cart_id: null,
            review_id: null,
            gender: '',
            detail1: '',
            detail2: ''
        }
        this.starKeyId = 0;
        this.totalReviews = 0;
        this.totalStars = 0;
        this.starAvg = 0;
    }
    
    componentDidMount() {
        this.props.fetchAllProduct() 
    }

    productImages() {
        if (this.state.photoUrls === undefined) {
                return <ul>
                    {this.props.shoe.photoUrls.map( (imgUrl, idx) => (
                        idx < 6 ? <p key={idx} ><img src={imgUrl} alt="" /></p> : ''
                    ))}
                </ul>
            } else {
                return <ul>
                    {this.state.photoUrls.map((imgUrl, idx) => (
                        idx < 6 ? <p key={idx} ><img src={imgUrl} alt="" /></p> : ''
                    ))}
                </ul>
            }
    }

    avgStars() {
        this.totalReviews = 0;
        this.totalStars = 0;
        this.starAvg = 0;
        this.props.shoe.reviews.forEach( review => {
            this.totalStars += review.stars
            this.totalReviews ++
        })
        this.starAvg = this.totalStars / this.totalReviews
    }

    stars(num) {
        let floorNum = Math.round(num)
        let i = 0;
        let arr = []
        for (let e = 0; e < 5; e++) {
            if (i < floorNum) {
                i++
                arr.push(
                    <div key={this.starKeyId} className="star-img" >
                        <img src="images/star_blk.png" alt="" />
                    </div>
                )
                this.starKeyId++
            } else {
                arr.push(
                    <div key={this.starKeyId} className="star-img" >
                        <img src="images/star_clear.png" alt="" />
                    </div>
                )
                this.starKeyId++
            }
        }
        return arr
    }

    shoeColorTiles() {
        return this.props.allShoes.map( (tempshoe, idx) => {
            if (tempshoe.productName === this.props.shoe.productName) { 
                return <div key={idx} className="color-tile" >
                        <a onClick={ () => this.setState({ photoUrls: tempshoe.photoUrls, colorway: tempshoe.colorway, productName: tempshoe.productName }) } >
                            <img src={tempshoe.photoUrls[0]} alt={this.props.productName} />
                        </a>
                    </div>
                    
            } })
    }

    setSize(size) {
        if (this.state.price === 0) {
            return { 
                product_name: this.props.shoe.productName, 
                size: size,
                colorway: this.props.shoe.colorway,
                price: this.props.shoe.price,
                cart_id: this.props.shoe.cart_id,
                review_id: this.props.shoe.review_id,
                gender: this.props.shoe.gender,
                detail1: this.props.shoe.detail1,
                detail2: this.props.shoe.detail2

              }
        } else {
            return { size: size }
        }
    }

    render() {
        if (this.props.shoe === undefined) return null;
        this.avgStars()
        return (
            <div className="root">
                <div className="pathway">
                    <p><Link to="/" >Home</Link> / <Link to='/shoes' >{this.props.shoe.gender[0].toUpperCase() + this.props.shoe.gender.slice(1)}'s Shoes</Link> </p>
                </div>
                <div className="shoe-show-main" >
                    <div className="shoe-grid">
                        {this.productImages()}
                    </div>
                    <div className="product-desc" >
                        <h3>{this.props.shoe.gender[0].toUpperCase() + this.props.shoe.gender.slice(1)}'s {this.props.shoe.productName}</h3>
                        <p className="price" >${this.props.shoe.price}</p>
                        <div className="prod-review-stars-container">
                            <div className="prod-review-stars">
                                {this.stars(this.starAvg)}
                            </div>
                            <div>
                                <p>({this.props.shoe.reviews.length})</p>
                            </div>
                        </div>
                        <span className="colorway-name" >CLASSICS:</span>
                        <span className="colorway-value">{this.props.shoe.colorway}</span>
                        <div className="shoe-colors">
                            {this.shoeColorTiles()}
                        </div>
                        <div className="size-chart" >
                            <p>Select Size:</p>
                            <ul>
                                <li><button onClick={() => this.setState(this.setSize(8))} >8</button></li>
                                <li><button onClick={() => this.setState(this.setSize(9))} >9</button></li>
                                <li><button onClick={() => this.setState(this.setSize(10))} >10</button></li>
                                <li><button onClick={() => this.setState(this.setSize(11))} >11</button></li>
                                <li><button onClick={() => this.setState(this.setSize(12))} >12</button></li>
                                <li><button onClick={() => this.setState(this.setSize(13))} >13</button></li>
                                <li><button onClick={() => this.setState(this.setSize(14))} >14</button></li>
                                
                            </ul>
                        </div>
                        <div className="sizing-detail" >
                            <p>This style is available in whole sizes only. In between sizes? We recommend you size down.</p>
                        </div>
                        <div>
                            <button className="cart-button" >
                                Add to Cart - ${this.props.shoe.price}
                            </button>
                        </div>
                        <div className="guarantee-detail" >
                            <p >Free shipping and 30 day returns</p>
                        </div>
                    </div>
                </div>
                <ReviewElement shoe={this.props.shoe} reviews={this.props.shoe.reviews} errors={this.props.errors} currentUser={this.props.currentUser} createReview={this.props.createReview} numStars={this.totalStars} numReviews={this.totalReviews} starAvg={this.starAvg}/>
            </div>
                
        )   
    }
}

export default ShoeShow;