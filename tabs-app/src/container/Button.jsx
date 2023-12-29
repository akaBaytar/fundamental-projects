const Button = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='button-container'>
      {jobs.map(({ id, company }, index) => (
        <button
          type='button'
          key={id}
          onClick={() => setCurrentItem(index)}
          className={index === currentItem ? 'active-button job-button' : 'job-button'}>
          {company}
        </button>
      ))}
    </div>
  );
};
export default Button;
