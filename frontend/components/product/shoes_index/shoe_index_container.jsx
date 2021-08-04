import ShoeIndex from './shoe_index'
import { connect } from 'react-redux'
import { fetchAllProduct } from '../../../actions/product_actions'

const mSTP = (state) => ({
    shoes: Object.values(state.entities.product)
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct())
})

export default connect(mSTP,mDTP)(ShoeIndex)