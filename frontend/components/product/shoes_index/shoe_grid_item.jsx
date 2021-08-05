import React from 'react';
import { Link } from "react-router-dom";

class ShoeGridItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.shoe
    }

    getAllImages() {
        // filter logic to see one product grid of each shoe
        // console.log(this.state)

         return this.props.allShoes.map( (tempshoe, idx) => {
             if (tempshoe.productName === this.props.shoe.productName) {
                 return <div key={idx} >
                     <a onClick={() => this.setState({ photoUrls: tempshoe.photoUrls, id: tempshoe.id }) } >
                         <img className="thumbnail" src={tempshoe.photoUrls[2]} alt="" />
                    </a>
                </div>
             }
            })
    }

    setDisplay(e) {
        if ( e === "on" ) {
            let ele = document.querySelector(".remove-sizes")
            console.log(ele)
            ele.classList.add("show-sizes")
            ele.classList.remove("remove-sizes")
        } else {
            let ele = document.querySelector(".show-sizes")
            ele.classList.add("remove-sizes")
            ele.classList.remove("show-sizes")
        }
    }

    render() {
        
    return (
        <div>
        <h3>{this.props.shoe.productName}</h3>
        <p>{this.props.shoe.detail1}</p>
        <div className="plp-element-root" >
            <div className="plp-details-box" >
                    <div className="plp-detail-container" onMouseEnter={() => this.setDisplay("on")} onMouseLeave={() => this.setDisplay("off")}>
                    <Link to={`/shoes/${this.state.id}`} >
                        <img src={this.state.photoUrls[2]} alt={this.props.shoe.productName} />
                    </Link>
                    <Link to={`/shoes/${this.props.shoe.id}`} >
                        {this.props.shoe.productName}
                    </Link>
                    <p>{this.props.shoe.colorway}</p>
                    <p>${this.props.shoe.price}</p>
                    <div className="thumbnail-carousel" >
                        {this.getAllImages()}
                    </div>
                        <div className="remove-sizes"  >
                            <p>Quick Add</p>
                    </div>
                </div>
            </div>
            <div className="plp-hero-img">
                <img src={this.props.shoe.photoUrls[6]} alt={this.props.shoe.productName}/>
                <div className="image-copy" >
                        <p >{this.props.shoe.detail2}</p>
                </div>
            </div>
        </div>
        </div>
    )
    }       
}

export default ShoeGridItem;