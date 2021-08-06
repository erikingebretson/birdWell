import React from 'react';

class ShoeShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchProduct()
    }

    productImages() {
        return (
            <ul >
                {this.props.shoe.photoUrls.map( (imgUrl, idx) => (
                    idx < 6 ? <p key={idx} ><img src={imgUrl} alt="" /></p> : ''
                ))
                }
            </ul>
        )
    }

    shoeColorTiles() {

        return (
            <div className="shoe-colors">
                <div >
                    <button className="color-tile"></button>
                </div>
                <div >
                    <button className="color-tile"></button>
                </div>
                <div >
                    <button className="color-tile"></button>
                </div>
                <div >
                    <button className="color-tile"></button>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.shoe === undefined) return null;
        console.log(this.props.shoe)
        return (
            <div className="root">
                <div className="pathway">
                    <p>Home / {this.props.shoe.gender}'s Shoes </p>
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
                        {this.shoeColorTiles()}
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