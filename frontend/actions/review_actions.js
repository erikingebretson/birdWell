import * as ReviewApiUtil from '../util/review_api_util'

export const RECEIVE_ALL_REVIEWS  = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const createReview = (review) => (dispatch) => (
    ReviewApiUtil.fetchReview(review)
    .then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err))
    )
)

export const fetchAllReviews = () => (dispatch) => (
    ReviewApiUtil.fetchAllReviews()
    .then(res => dispatch(receiveAllReviews(res)))
)