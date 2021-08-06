import { connect } from 'react-redux'
import { fetchAllProduct, fetchProduct } from '../../../actions/product_actions'
import ShoeShow from './shoe_show'

const mSTP = (state, ownProps) => ({
    shoe: state.entities.product[ownProps.match.params.shoeId],
    allShoes: Object.values(state.entities.product)
})

const mDTP = (dispatch, ownProps) => ({
    fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.shoeId)),
    fetchAllProduct: () => dispatch(fetchAllProduct())
})

export default connect(mSTP,mDTP)(ShoeShow)