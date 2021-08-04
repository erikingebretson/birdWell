import React from 'react';
import { Link } from "react-router-dom";

const ShoeGridItem = (props) => {
    
    return (
        <div>
            <Link to={`/shoes/${props.shoe.id}`} >{props.shoe.productName}</Link>
        </div>
        
    )
}

export default ShoeGridItem;