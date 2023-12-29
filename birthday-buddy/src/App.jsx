import { useState } from 'react';

import data from '../mock/data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type='button' className='button button-block' onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;