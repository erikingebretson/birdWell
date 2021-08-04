import React from 'react';
import { Link } from "react-router-dom";

class ShoeGridItem extends React.Component {

    getAllImages() {
        // NEED TO REVISIT THIS LOGIC ONCE DB HAS BEEN SEEDED
        let fotoUrls = this.props.allShoes.map( shoe => {
            
            return shoe.photoUrls[2]
            shoe.productName === this.props.shoe.productName ? shoe.photoUrls[2] : null
        })
        console.log(fotoUrls)

        return fotoUrls.map( (img, idx) => (
            <li key={idx} ><img className="thumbnail" src={img} alt="" /></li>
        ))
    }


    render() {
        return (
            <div>
                <h3>{this.props.shoe.productName}</h3>
                <p>Our everyday sneaker made with breezy eucalyptus tree.</p>
                <div className="plp-element-root" >
                    <div className="plp-details-box" >
                        <img src={this.props.shoe.photoUrls[2]} alt={this.props.shoe.productName} />
                        <Link to={`/shoes/${this.props.shoe.id}`} >{this.props.shoe.productName}</Link>
                        <p>{this.props.shoe.colorway}</p>
                        <p>${this.props.shoe.price}</p>
                        <ul className="thumbnail-carousel" >
                            {this.getAllImages()}
                        </ul>
                    </div>
                    <div className="plp-hero-img">
                        <img src={this.props.shoe.photoUrls[6]} alt={this.props.shoe.productName}/>
                    </div>
                </div>
            </div>
        )
    }       
}

export default ShoeGridItem;