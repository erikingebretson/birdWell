import React from 'react';
import { Link } from 'react-router-dom';

class ReviewElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                title: '',
                body: '',
                stars: '',
                username: this.props.currentUser ? this.props.currentUser.email : '', //usernam === email
                user_id: this.props.currentUser ? this.props.currentUser.id : '',
                product_id: this.props.shoe.id
            }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.starKeyId = 0;
        this.headerStarKeyId = 0;

    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state)
        this.props.createReview(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    stars(num) {
        let floorNum = Math.round(num)
        let i = 0;
        let arr = []
        for (let e = 0; e < 5; e++) {
            if (i < floorNum) {
            i++
            arr.push(   
                <div key={this.starKeyId} className="star-img" >
                    <img src="images/star_blk.png" alt="" />
                </div>
            )
            this.starKeyId ++
            } else {
            arr.push(
                <div key={this.starKeyId} className="star-img" >
                    <img src="images/star_clear.png" alt="" />
                </div>
            )
            this.starKeyId ++
            }
        }
        return arr
    }

    headerStars(num) {
        let floorNum = Math.round(num)
        let i = 0;
        let arr = []
        for (let e = 0; e < 5; e++) {
            if (i < floorNum) {
                i++
                arr.push(
                    <div key={this.headerStarKeyId} className="star-img" >
                        <img src="images/star_blk.png" alt="" />
                    </div>
                )
                this.headerStarKeyId++
            } else {
                arr.push(
                    <div key={this.headerStarKeyId} className="star-img" >
                        <img src="images/star_clear.png" alt="" />
                    </div>
                )
                this.headerStarKeyId++
            }
        }
        return arr
    }

    readReviews() {
        return this.props.reviews.map( (review,idx) => {
            // console.log(review)
            if (review.productId === this.props.shoe.id || review.product_id === this.props.shoe.id ) {
            let dateStr = Date.parse(review.createdAt)
            let date = new Date(dateStr)

            return <div key={idx} className="review-element">
                        <div className="review-content" >
                            <div className="prod-review-stars"  >
                                {this.stars(review.stars)}
                            </div>
                            <p className="review-title" >{review.title}</p>
                            <p className="review-body" >{review.body}</p>
                            {console.log(date.toDateString())}
                            { date.toDateString() !== 'Invalid Date' ?  <p className="review-date" >{date.toDateString().slice(4)}</p> : <p></p> }
                        </div>
                        <div className="user-detail">
                            <div className="user-firstname" >
                                <p>{review.userFirstName}</p>
                                <p>Verified User</p>
                            </div>
                            <div>
                                <p>{this.props.shoe.gender[0].toUpperCase() + this.props.shoe.gender.slice(1)}'s {this.props.shoe.productName}</p>
                            </div>
                        </div>
                    </div>
            }         
        })
    }

    readErrors() {
        console.log(this.props.errors)
        return this.props.errors.map((error, i) => (
            <div className="errors" key={i}>
                <p >{error}</p>
            </div>
        ))
    }


    reviewForm() {

        if (this.props.currentUser) {
        return    <div className="review-form-root" >
                    <div className="errors-container" >
                        {this.props.errors === undefined ? <div></div> : this.readErrors()}
                    </div>
                    <form className="review-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <label >Title
                            <input type="text" onChange={this.update('title')} value={this.state.title}/>
                        </label>
                        <label >Body
                            <textarea name="" id="" cols="30" rows="5" onChange={this.update('body')} value={this.state.body}></textarea>
                        </label>
                        <label className="stars-dropdown" >Stars
                        <select onChange={this.update('stars')} >
                            <option defaultValue={null} >Select Star Rating</option>
                            <option type="radio" onChange={this.update('stars')} value='0'>0</option>
                            <option type="radio" onChange={this.update('stars')} value='1'>1</option>
                            <option type="radio" onChange={this.update('stars')} value='2'>2</option>
                            <option type="radio" onChange={this.update('stars')} value='3'>3</option>
                            <option type="radio" onChange={this.update('stars')} value='4'>4</option>
                            <option type="radio" onChange={this.update('stars')} value='5'>5</option>
                        </select>
                        </label>
                        <button className='cart-button'>Add Review</button>
                    </form>
                </div>
        } else {
            return  <div className="review-login" >
                        <p>Want to leave a review?</p>
                        <Link to="/account/login"><button className='cart-button'>LOGIN</button></Link>
                    </div>
        }
    }

    render() {
        return (
            <div className="review-content">
                <div className="review-content-header">
                    <h4>{this.props.shoe.gender[0].toUpperCase() + this.props.shoe.gender.slice(1)}'s {this.props.shoe.productName} Reviews</h4>
                    <div  >
                        <div className="review-stars-container">
                            { this.props.starAvg >= 0 ? <p className="review-rating-avg" >{this.props.starAvg.toFixed(1)}</p> : <p></p> }
                            {this.headerStars(this.props.starAvg)}
                        </div>
                        <p>{this.props.numReviews} Reviews</p>
                    </div>

                </div>
                <div className="reviews-container" >
                    {this.readReviews()}
                </div>
                {this.reviewForm()}
            </div>
        )
    }
}

export default ReviewElement;