import { useGlobalContext } from '../../context';
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        <button className='remove-btn' onClick={() => removeItem(id)}>
          <FaTrash />
          <span>Remove</span>
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => increaseAmount(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        <span className='amount'>{amount}</span>
        <button className='amount-btn' onClick={() => decreaseAmount(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
