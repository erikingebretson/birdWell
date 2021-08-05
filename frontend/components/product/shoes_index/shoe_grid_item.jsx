import React from 'react';
import { Link } from "react-router-dom";

class ShoeGridItem extends React.Component {

    getAllImages() {
        // NEED TO REVISIT THIS LOGIC ONCE DB HAS BEEN SEEDED
         return this.props.allShoes.map( (shoe, idx) => (
             <div key={idx} >
                <Link to={`/shoes/${shoe.id}`} ><img className="thumbnail" src={shoe.photoUrls[2]} alt="" /></Link>
            </div>
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
                        <div className="thumbnail-carousel" >
                            {this.getAllImages()}
                        </div>
                    </div>
                    <div className="plp-hero-img">
                        <img src={this.props.shoe.photoUrls[6]} alt={this.props.shoe.productName}/>
                        <div className="image-copy" >
                            <p >Breezy Feel, Light Material</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }       
}

export default ShoeGridItem;