import Title from '../shared/Title';
import { OurServices } from '../data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' span='services' />
      <div className='section-center services-center'>
        {OurServices.map(({ id, icon, text, title }) => (
          <article key={id} className='service'>
            <span className='service-icon'>
              <i className={icon}></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{title}</h4>
              <p className='service-text'>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
