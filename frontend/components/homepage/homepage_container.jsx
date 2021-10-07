import { connect } from 'react-redux';
import Homepage from './homepage_root';
import { fetchAllProduct } from '../../actions/product_actions';
import { fetchSharedCart } from '../../actions/cart_actions';

const mSTP = (state, ownProps) => ({
    shoes: Object.values(state.entities.product),
    path: ownProps.match.params
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct()),
    fetchSharedCart: (cartId) => dispatch(fetchSharedCart(cartId))
})

export default connect(mSTP,mDTP)(Homepage)