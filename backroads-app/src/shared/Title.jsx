import PropTypes from 'prop-types';

const Title = ({ title, span }) => {
  return (
    <div className='section-title'>
      <h2>
        {title}
        <span> {span} </span>
      </h2>
    </div>
  );
};
export default Title;

Title.propTypes = {
  title: PropTypes.string,
  span: PropTypes.string,
};
