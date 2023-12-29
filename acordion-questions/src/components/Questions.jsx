import Question from './Question';

const Questions = ({ questions, active, toggle }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question key={question.id} {...question} active={active} toggle={toggle}/>
      ))}
    </section>
  );
};
export default Questions;
