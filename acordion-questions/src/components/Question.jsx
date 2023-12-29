import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const Question = ({ id, title, info, active, toggle }) => {
  const isActive = id === active;

  return (
    <article className={`question ${isActive && 'show'}`}>
      <header>
        <h5>{title}</h5>
        <button type='button' className='question-button' onClick={() => toggle(id)}>
          {isActive ? <ChevronUp /> : <ChevronDown />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default Question;
