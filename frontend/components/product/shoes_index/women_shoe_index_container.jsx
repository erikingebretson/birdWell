import WomenShoeIndex from './women_shoe_index'
import { connect } from 'react-redux'
import { fetchAllProduct, fetchProduct } from '../../../actions/product_actions'

const mSTP = (state, ownProps) => ({
    shoes: Object.values(state.entities.product),
    path: ownProps.match.path
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchProduct: (id) => dispatch(fetchProduct(id))
})

export default connect(mSTP, mDTP)(WomenShoeIndex)