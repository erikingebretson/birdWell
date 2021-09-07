import React, { useRef } from 'react';
import { Link } from "react-router-dom";

class ShoeGridItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoe: this.props.shoe,
            changed: 'n'
        }
    }
    
    componentDidUpdate() {
        // console.log('hi')
        console.log(this.props)
        console.log(this.state)
        if ( (this.props.shoe.id !== this.state.shoe.id) && this.props.filtered === 'y' ) {
            this.setState({
                shoe: this.props.shoe,
                // changed: 'n'
            })
        }
    }

    getAllImages() {
        // filter logic to see one product grid of each shoe
        
         return this.props.allShoes.map( (tempshoe, idx) => {
             if (   tempshoe.detail1 !== null && 
                    tempshoe.productName === this.props.shoe.productName && 
                    tempshoe.gender === this.props.shoe.gender
                ) {
                 return <div key={idx} >
                     <a onClick={ () => this.setState({ shoe: tempshoe, changed: 'y' }) } >
                         <img className="thumbnail" src={tempshoe.photoUrls[2]} alt="" />
                    </a>
                </div>
             }
            })
    }

    setDisplay(e) {
        // if time - review for implementing react Hooks
        if ( e === "on" ) {

            let ele3 = useRef(null)
            let ele4 = useRef(null)

            let ele1 = ele3.current.querySelector(".remove-sizes")
            let ele2 = ele4.current.querySelector(".remove-left-padding")
            
            ele1.classList.add("show-sizes")
            ele2.classList.add("show-left-padding")
            ele1.classList.remove("remove-sizes")
            ele2.classList.remove("remove-left-padding")
        } else {
            // let ele1 = useRef(null)
            // let ele2 = useRef(null)
            // ele1 = document.querySelector(".show-sizes")
            // ele2 = document.querySelector(".show-left-padding")
            // ele1.classList.add("remove-sizes")
            // ele2.classList.add("remove-left-padding")
            // ele1.classList.remove("show-sizes")
            // ele2.classList.remove("show-left-padding")
        }
    }

    render() {
        // console.log(this.props)
        // console.log(this.state)
        
    return (
        <div>
        <h3>{this.props.shoe.productName}</h3>
        <p>{this.props.shoe.detail1}</p>
        <div className="plp-element-root" >
            <div className="plp-details-box" >
                <div className="remove-left-padding" ></div>
                    {/* <div className="plp-detail-container" onMouseEnter={() => this.setDisplay("on")} onMouseLeave={() => this.setDisplay("off")}> */}
                    <div className="plp-detail-container" >
                    <Link to={`/shoes/${this.state.shoe.id}`} >
                        <img src={this.state.shoe.photoUrls[2]} alt={this.props.shoe.productName} />
                    </Link>
                    <Link to={`/shoes/${this.props.shoe.id}`} >
                        {this.props.shoe.productName}
                    </Link>
                    <p>{this.props.shoe.colorway}</p>
                    <p>${this.props.shoe.price}</p>
                    <div className="thumbnail-carousel" >
                        {this.getAllImages()}
                    </div>
                <div className="remove-sizes">
                    <p>Quick Add</p>
                    <ul>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="hero-img-box">
                <div className="plp-hero-img">
                    <img src={this.props.shoe.photoUrls[6]} alt={this.props.shoe.productName}/>
                    <div className="image-copy" >
                            <p >{this.props.shoe.detail2}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    }       
}

export default ShoeGridItem;