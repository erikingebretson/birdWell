import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchAllProduct } from '../../actions/product_actions';
import { fetchCart } from '../../actions/cart_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.cart
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchCart: (userId) => dispatch(fetchCart(userId))
})

export default connect(mSTP, mDTP)(Header)