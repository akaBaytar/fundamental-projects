import { v4 as uuidv4 } from 'uuid';
import { BsChevronDoubleRight } from 'react-icons/bs';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className='job-desc'>
            <BsChevronDoubleRight className='job-icon' />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
