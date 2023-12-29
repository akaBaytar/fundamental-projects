import { useState } from 'react';

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='image' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type='button' className='info-button' onClick={() => setReadMore(!readMore)}>
            {!readMore && 'Read More'}
          </button>
        </p>
        <button type='button' className='button button-block delete-button' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
