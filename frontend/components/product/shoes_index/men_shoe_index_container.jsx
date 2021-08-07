import MenShoeIndex from './men_shoe_index'
import { connect } from 'react-redux'
import { fetchAllProduct, fetchProduct } from '../../../actions/product_actions'

const mSTP = (state) => ({
    shoes: Object.values(state.entities.product)
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchProduct: (id) => dispatch(fetchProduct(id))
})

export default connect(mSTP, mDTP)(MenShoeIndex)