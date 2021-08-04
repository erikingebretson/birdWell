import React from 'react';
import { Link } from "react-router-dom";

const ShoeGridItem = (props) => {
    console.log(props)
    return (
        <div className="plp-element-root" >
            <div className="plp-details-box" >
                <h4>{props.shoe.productName}</h4>
                <img src={props.shoe.photoUrls[2]} alt={props.shoe.productName} />
                <Link to={`/shoes/${props.shoe.id}`} >{props.shoe.productName}</Link>
                <p>{props.shoe.colorway}</p>
                <p>${props.shoe.price}</p>
            </div>
            <div className="plp-hero-img">
                <img src={props.shoe.photoUrls[6]} alt={props.shoe.productName}/>
            </div>
        </div>
        
    )
}

export default ShoeGridItem;