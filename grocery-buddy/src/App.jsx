import { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './components/Form';
import List from './components/List';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let list = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(list);

  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);

    toast.info('Item added to list');
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
    setLocalStorage(newItems);

    toast.info('Item successfuly removed');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <List items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position='top-right' />
    </section>
  );
};

export default App;
