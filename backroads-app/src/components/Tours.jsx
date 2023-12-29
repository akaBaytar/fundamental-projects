import Title from '../shared/Title';
import { OurTours } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' span='tours' />
      <div className='section-center featured-center'>
        {OurTours.map(({ id, img, date, title, location, description, duration, cost }) => (
          <article key={id} className='tour-card'>
            <div className='tour-img-container'>
              <img src={img} className='tour-img' alt={title} />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{title}</h4>
              </div>
              <p>{description}</p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>
                  {location}
                </p>
                <p>{duration} days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Tours;
