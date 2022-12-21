import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();
  // This will update whenever we add or remove the item because those are reducers we've connected with different handlers.
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleEventHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleEventHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
