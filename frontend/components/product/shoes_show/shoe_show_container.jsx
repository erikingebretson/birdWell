import { connect } from 'react-redux'
import { fetchCart } from '../../../actions/cart_actions'
import { fetchAllProduct, fetchProduct, createProduct } from '../../../actions/product_actions'
import { fetchAllReviews, createReview } from '../../../actions/review_actions'
import ShoeShow from './shoe_show'

const mSTP = (state, ownProps) => ({
    shoe: state.entities.product[ownProps.match.params.shoeId],
    allShoes: Object.values(state.entities.product),
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
    currentUserCartId: state.entities.users[state.session.id].cart.id,
    errors: state.errors.uiErrors.responseJSON,
    cart: ''
})

const mDTP = (dispatch, ownProps) => ({
    fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.shoeId)),
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchAllReviews: () => dispatch(fetchAllReviews()),
    createProduct: (product) => dispatch(createProduct(product)),
    createReview: (review) => dispatch(createReview(review)),
    fetchCart: (userId) => dispatch(fetchCart(userId))
})

export default connect(mSTP,mDTP)(ShoeShow)