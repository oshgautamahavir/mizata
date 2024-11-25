import PropTypes from 'prop-types'

import './SuccessModal.css';

import CircleCheckIcon from './CircleCheckIcon';

const SuccessModal = ({ showSuccessModal, closeModal }) => {
  if (!showSuccessModal) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="icon">
          <CircleCheckIcon />
        </div>
        <p > Item has been successfully created. </p>
        <div className='button-container'>
          <button onClick={closeModal}> Dismiss </button>
        </div>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  showSuccessModal: PropTypes.bool,
  closeModal: PropTypes.func
}

export default SuccessModal;