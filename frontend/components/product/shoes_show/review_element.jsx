import React from 'react';
import { Link } from 'react-router-dom';

class ReviewElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                title: '',
                body: '',
                stars: '',
                username: this.props.currentUser.email, //usernam === email
                user_id: this.props.currentUser.id,
                product_id: this.props.shoe.id
            }
        this.total = 0;
        this.numReviews = 0;
        this.avg = this.total / this.numReviews;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllReviews()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createReview(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    readReviews() {
        return this.props.reviews.map( (review,idx) => {
            if (review === undefined) {
                return console.log('FAILED' + review);
            } else if (review.productId === this.props.shoe.id || review.product_id === this.props.shoe.id ) {
            this.total += review.stars
            this.numReviews += 1
             return <div key={idx} className="review-element" >
                        <p></p>
                        <p className="user-stars" >{review.stars}</p>
                        <p className="review-title" >{review.title}</p>
                        <p className="review-body" >{review.body}</p>
                        <p className="review-date" >{review.createdAt}</p>
                    </div>
            }
        })
    }

    setStars() {
        return (
            <div className="review-stars-container">
                <div className="prod-review-stars"  >
                    <div className="star-img" >
                        <img src="https://birdwell-dev.s3.us-west-1.amazonaws.com/star.png" alt="" />
                    </div>
                    <div className="star-img" >
                        <img src="https://birdwell-dev.s3.us-west-1.amazonaws.com/star.png" alt="" />
                    </div>
                    <div className="star-img" >
                        <img src="https://birdwell-dev.s3.us-west-1.amazonaws.com/star.png" alt="" />
                    </div>
                    <div className="star-img" >
                        <img src="https://birdwell-dev.s3.us-west-1.amazonaws.com/star.png" alt="" />
                    </div>
                    <div className="star-img" >
                        <img src="https://birdwell-dev.s3.us-west-1.amazonaws.com/star.png" alt="" />
                    </div>
                </div>
                <div>
                    <p>5.0</p>
                </div>
            </div>
        )
    }

    reviewForm() {

        if (this.props.currentUser) {
        return    <div className="review-form-root" >
                    <form className="review-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <label >Title
                            <input type="text" onChange={this.update('title')} value={this.state.title}/>
                        </label>
                        <label >Body
                            <textarea name="" id="" cols="30" rows="5" onChange={this.update('body')} value={this.state.body}></textarea>
                        </label>
                        <label >Stars
                            <input type="text" onChange={this.update('stars')} value={this.state.stars}/>
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
                    <h4>{this.props.shoe.gender}'s {this.props.shoe.productName} Reviews</h4>
                    {this.setStars()}
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