import React from 'react';
import { Link } from 'react-router-dom';

class ShoeShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.shoe
    }
    
    componentDidMount() {
        this.props.fetchProduct(34)
        this.props.fetchProduct(35)
        this.props.fetchProduct(36)
        this.props.fetchProduct(37)
        // this.props.fetchAllProduct()
    }

    productImages() {
                console.log(this.state)
                if (this.state === null) {
                    return  <ul >
                        {this.props.shoe.photoUrls.map( (imgUrl, idx) => (
                            idx < 6 ? <p key={idx} ><img src={imgUrl} alt="" /></p> : ''
                        ))
                        }
                    </ul>
                } else {
                    return <ul>
                        {this.state.photoUrls.map((imgUrl, idx) => (
                            idx < 6 ? <p key={idx} ><img src={imgUrl} alt="" /></p> : ''
                        ))
                    }
                    </ul>
                }
    }

    // setNewState(tshoe) {
    //     console.log(tshoe)
    //     return this.setState({ id: tshoe.id, colorway: tshoe.colorway, photoUrls: tshoe.photoUrls })
    // }

    shoeColorTiles() {
        return this.props.allShoes.map( (tempshoe, idx) => {
            if (tempshoe.productName === this.props.shoe.productName) { 
                return <div key={idx} className="color-tile" >
                        <a onClick={ () => this.setState({ id: tempshoe.id, photoUrls: tempshoe.photoUrls }) } >
                            <img src={tempshoe.photoUrls[0]} alt={this.props.productName} />
                        </a>
                    </div>
                    
            }
    })
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <div className="root">
                <div className="pathway">
                    <p>Home / <Link to='/shoes' >{this.props.shoe.gender}'s Shoes</Link> </p>
                </div>
                <div className="shoe-show-main" >
                    <div className="shoe-grid">
                        {this.productImages()}
                    </div>
                    <div className="product-desc" >
                        <h3>{this.props.shoe.productName}</h3>
                        <p className="price" >${this.props.shoe.price}</p>
                        <div className="prod-review-widget" >
                            <p>tempreview</p>
                        </div>
                        <p className="colorway">CLASSICS: {this.props.shoe.colorway}</p>
                        <div className="shoe-colors">
                            {console.log(this.state)}
                            {this.shoeColorTiles()}
                            {console.log(this.state)}
                        </div>
                        <div className="size-chart" >
                            <p>Select Size:</p>
                            <ul>
                                <li><button>8</button></li>
                                <li><button>9</button></li>
                                <li><button>10</button></li>
                                <li><button>11</button></li>
                                <li><button>12</button></li>
                                <li><button>13</button></li>
                                <li><button>14</button></li>
                                
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
                <div className="review-content">
                    <div className="review-content-header">
                        <h4>{this.props.shoe.gender}'s {this.props.shoe.productName} Reviews</h4>
                    </div>
                </div>
            </div>
                
        )   
    }
}

export default ShoeShow;