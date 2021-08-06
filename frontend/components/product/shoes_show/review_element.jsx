import React from 'react';
import { Link } from 'react-router-dom';

class ReviewElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: {
                title: '',
                body: '',
                stars: null,
                username: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount() {
    //     //fetch existing prod reviews
    //     this.props.fetchAllReviews()
    // }


    readReviews() {
        console.log(this.props.reviews)
        return this.props.reviews.map( (review,idx) => {
            if (review.productId === this.props.shoe.id) {
             return <div>
                        <p></p>
                        <p>{review.title}</p>
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

    handleSubmit(e) {
        e.preventDefault() 
    }


    render() {
        return (
            <div className="review-content">
                <div className="review-content-header">
                    <h4>{this.props.shoe.gender}'s {this.props.shoe.productName} Reviews</h4>
                    {this.setStars()}
                </div>
                {this.readReviews()}
                <div className="review-form-root" >
                    <form className="review-form" onSubmit={(e) => this.handleSubmit(e) }>

                        <label >Title
                            <input type="text" />
                        </label>
                        <label >Body
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </label>
                        <label >Stars
                            <input type="text" />
                        </label>
                        <label >Username
                            <input type="text" />
                        </label>
                        <button className='cart-button'>Add Review</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default ReviewElement;