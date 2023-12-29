import { useState } from 'react';

import data from '../mock/data';

import Menu from './components/Menu';
import Title from './components/Title';
import Categories from './components/Categories';

const categoriesData = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories] = useState(categoriesData);

  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);

    if (category === 'all') {
      setMenuItems(data);
      return;
    }
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
