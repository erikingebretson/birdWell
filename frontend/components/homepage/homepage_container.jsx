import { connect } from 'react-redux';
import Homepage from './homepage_root';
import { fetchAllProduct } from '../../actions/product_actions';

const mSTP = (state, ownProps) => ({
    shoes: Object.values(state.entities.product)
})

const mDTP = (dispatch) => ({
    fetchAllProduct: () => dispatch(fetchAllProduct())
})

export default connect(mSTP,mDTP)(Homepage)