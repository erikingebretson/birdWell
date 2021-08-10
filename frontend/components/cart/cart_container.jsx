import { connect } from 'react-redux';
import { fetchCart, deleteCart } from '../../actions/cart_actions';
import { deleteProduct } from '../../actions/product_actions';
import Cart from './cart'


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.cart,
    products: state.entities.cart.products
})

const mDTP = (dispatch) => ({
    fetchCart: cartId => dispatch(fetchCart(cartId)),
    deleteProduct: prodId => dispatch(deleteProduct(prodId))
})

export default connect(mSTP,mDTP)(Cart)