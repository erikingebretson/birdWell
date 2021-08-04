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
                    <p key={idx} ><img src={imgUrl} alt="" /></p>
                ))
                }
            </ul>
        )
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <div className="shoe-show-main" >
                <div className="shoe-grid">
                    {this.productImages()}
                </div>
                <div className="product-desc" >
                    <h3>{this.props.shoe.productName}</h3>
                    <p>${this.props.shoe.price}</p>
                </div>
            </div>
        )   
    }
}

export default ShoeShow;