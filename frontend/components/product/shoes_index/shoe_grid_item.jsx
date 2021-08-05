import React from 'react';
import { Link } from "react-router-dom";

class ShoeGridItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.shoe
    }

    getAllImages() {
        // NEED TO REVISIT THIS LOGIC ONCE DB HAS BEEN SEEDED - if tempshoe.productName === this.props.shoe.productName THEN LINK THE url/img
        console.log(this.state)
         return this.props.allShoes.map( (tempshoe, idx) => {
             if (tempshoe.productName === this.props.shoe.productName) {
                 return <div key={idx} >
                     {/* <Link to={`/shoes/${tempshoe.id}`} ><img className="thumbnail" src={tempshoe.photoUrls[2]} alt="" /></Link> */}
                     <a onClick={() => this.setState({ photoUrls: tempshoe.photoUrls, id: tempshoe.id }) } ><img className="thumbnail" src={tempshoe.photoUrls[2]} alt="" /></a>
                </div>
             }
            })
        }


    render() {
        // console.log(this.state)
        return (
            <div>
                <h3>{this.props.shoe.productName}</h3>
                <p>Our everyday sneaker made with breezy eucalyptus tree.</p>
                <div className="plp-element-root" >
                    <div className="plp-details-box" >
                        <Link to={`/shoes/${this.state.id}`} ><img src={this.state.photoUrls[2]} alt={this.props.shoe.productName} /></Link>
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