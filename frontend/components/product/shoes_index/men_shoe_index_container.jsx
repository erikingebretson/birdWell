import MenShoeIndex from './men_shoe_index'
import { connect } from 'react-redux'
import { fetchAllProduct, fetchProduct } from '../../../actions/product_actions'

const mSTP = (state, ownProps) => ({
    shoes: Object.values(state.entities.product),
    path: ownProps.match.path
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchCart: (userId) => dispatch(fetchCart(userId))
})

export default connect(mSTP, mDTP)(MenShoeIndex)