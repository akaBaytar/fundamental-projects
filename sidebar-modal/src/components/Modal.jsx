import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h4>modal content</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora nemo reprehenderit dolore labore
          explicabo velit cumque numquam eum dolor nostrum tenetur animi maiores autem nihil expedita aliquid id,
          dignissimos earum quasi. Explicabo provident harum officiis eius quo molestias totam in sapiente placeat
          alias.
        </p>
        <button className='close-modal-button' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
