import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!newItem) {
      toast.error('Please enter valid value.');
      return;
    }

    addItem(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>Grocery Buddy</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          id='form-input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' className='button'>
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
