import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#645cff');

  const submitHandler = (e) => {
    e.preventDefault();
    addColor(color)
  };

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={submitHandler}>
        <input type='color' id='color-input' value={color} onChange={(e) => setColor(e.target.value)} />
        <input
          type='text'
          id='text-input'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#645cff'
        />
        <button type='submit' className='button' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
