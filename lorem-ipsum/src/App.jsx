import { useState } from 'react';

import data from '../data';

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();

    setText(data.slice(0, +count));
  };

  return (
    <section className='section-center'>
      <h4>Lorem ipsum</h4>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          min={1}
          max={8}
          step={1}
          id='amount'
          type='number'
          name='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='button'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
