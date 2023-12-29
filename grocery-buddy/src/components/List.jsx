import Item from './Item';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <Item key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>
      ))}
    </div>
  );
};

export default List;
