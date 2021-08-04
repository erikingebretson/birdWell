import React from 'react';
import { Link } from "react-router-dom";

const ShoeGridItem = (props) => {
    console.log(props)
    return (
        <div className="plp-root" >
            <div className="plp-details-box" >
                <img src={props.shoe.photoUrls[2]} alt="" width='150px' />
                <Link to={`/shoes/${props.shoe.id}`} >{props.shoe.productName}</Link>
            </div>
            <div className="plp-hero-img">
                <img src={props.shoe.photoUrls[6]} alt="" width='150px'/>
            </div>
        </div>
        
    )
}

export default ShoeGridItem;