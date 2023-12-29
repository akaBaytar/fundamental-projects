import { useState } from 'react';

import data from '../mock';
import Questions from './components/Questions';

const App = () => {
  const [active, setActive] = useState(null);
  const [questions] = useState(data);

  const toggle = (id) => {
    const activeId = id === active ? null : id;
    setActive(activeId);
  };

  return (
    <main>
      <Questions questions={questions} active={active} toggle={toggle} />
    </main>
  );
};
export default App;
