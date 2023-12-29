import CartItem from '../components/CartItem';

import { useGlobalContext } from '../../context';

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartArray.map(([id, item]) => (
          <CartItem key={id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            Total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
