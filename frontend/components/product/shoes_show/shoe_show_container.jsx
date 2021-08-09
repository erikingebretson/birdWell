import { connect } from 'react-redux'
import { fetchAllProduct, fetchProduct } from '../../../actions/product_actions'
import { fetchAllReviews, createReview } from '../../../actions/review_actions'
import ShoeShow from './shoe_show'

const mSTP = (state, ownProps) => ({
    shoe: state.entities.product[ownProps.match.params.shoeId],
    allShoes: Object.values(state.entities.product),
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.uiErrors.responseJSON
})

const mDTP = (dispatch, ownProps) => ({
    fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.shoeId)),
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchAllReviews: () => dispatch(fetchAllReviews()),
    createReview: (review) => dispatch(createReview(review))
})

export default connect(mSTP,mDTP)(ShoeShow)