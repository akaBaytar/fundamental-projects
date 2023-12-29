import Title from '../shared/Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' span='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src='./images/about.jpeg' className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci aliquam nobis aliquid. Aperiam
            error, harum natus accusamus repellat sunt possimus.
          </p>
          <p>
            Commodi aut ipsam blanditiis sint architecto, explicabo a eos sunt dignissimos voluptatibus ab sit ratione
            quaerat minima neque iste reiciendis repellat quidem earum provident saepe rem, temporibus vero impedit!
            Sint perferendis odit unde tenetur, architecto dolor deserunt.
          </p>
          <a href='#' className='button'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
