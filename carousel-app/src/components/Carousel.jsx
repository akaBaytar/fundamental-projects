import { useEffect, useState } from 'react';

import { list } from '../../mock/data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [people] = useState(list);
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((old) => (old - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setCurrent((old) => (old + 1) % people.length);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slider);
  }, [current]);

  return (
    <section className='slider-container'>
      {people.map(({ id, image, name, title, quote }, index) => (
        <article
          key={id}
          className='slide'
          style={{
            transform: `translateX(${100 * (index - current)}%)`,
            opacity: index === current ? 1 : 0,
            visibility: index === current ? 'visible' : 'hidden',
          }}>
          <img src={image} alt={name} className='person-image' />
          <h5 className='name'>{name}</h5>
          <p className='title'>{title}</p>
          <p className='text'>{quote}</p>
          <FaQuoteRight className='icon' />
        </article>
      ))}
      <button type='button' onClick={prevSlide} className='prev'>
        <FaChevronLeft />
      </button>
      <button type='button' onClick={nextSlide} className='next'>
        <FaChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
