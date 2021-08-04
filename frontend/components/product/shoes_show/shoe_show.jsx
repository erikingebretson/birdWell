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
            <div className="shoe-grid">
                {this.props.shoe.photoUrls.map( (imgUrl, idx) => (
                    <p key={idx} ><img src={imgUrl} alt="" /></p>
                ))
                }
            </div>
        )
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <div className="shoe-show-main" >
                <ul  >
                    {this.productImages()}
                </ul>
                <div className="product-desc" >
                    <h3>{this.props.shoe.productName}</h3>
                    <p>${this.props.shoe.price}</p>
                </div>
            </div>
        )   
    }
}

export default ShoeShow;