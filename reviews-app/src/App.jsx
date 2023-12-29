import { useState } from 'react';

import { ChevronLeft, ChevronRight, Quote } from 'react-bootstrap-icons';

import people from '../mock/data';

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, text, image } = people[index];

  const prevPerson = () => {
    setIndex((current) => {
      let newIndex = current - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((current) => {
      let newIndex = current + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) randomIndex = index + 1;
    setIndex(checkIndex(randomIndex));
  };

  const checkIndex = (index) => {
    if (index < 0) index = people.length - 1;
    if (index > people.length - 1) index = 0;
    return index;
  };

  return (
    <main>
      <article className='review'>
        <div className='image-container'>
          <img src={image} alt={name} className='person-image' />
          <span className='quote-icon'>
            <Quote />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button type='button' className='prev-button' onClick={prevPerson}>
            <ChevronLeft />
          </button>
          <button type='button' className='next-button' onClick={nextPerson}>
            <ChevronRight />
          </button>
        </div>
        <button type='button' className='button button-hipster' onClick={randomPerson}>
          Random Reviews
        </button>
      </article>
    </main>
  );
};
export default App;
