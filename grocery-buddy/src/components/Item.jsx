import { nanoid } from 'nanoid';

const Item = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input type='checkbox' id={nanoid()} checked={item.completed} onChange={() => editItem(item.id)} />
      <p style={{ textDecoration: item.completed && 'line-through' }}>{item.name}</p>
      <button type='button' className='button remove-button' onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
