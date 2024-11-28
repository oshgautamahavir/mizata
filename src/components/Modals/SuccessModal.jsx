import PropTypes from 'prop-types'

import './css/SuccessModal.css';

import CircleCheckIcon from './icons/CircleCheckIcon';

const SuccessModal = ({ showSuccessModal, closeModal, message }) => {
  if (!showSuccessModal) return null;

  // TODO: Find a way that the icon in the className does not repeat

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className={message==='added' ? 'icon green' : 'icon red'}>
          <CircleCheckIcon />
        </div>
        <p > Item has been successfully {message}. </p>
        <div className='button-container'>
          <button
            className={message === 'added' ? 'green' : 'red'}
            onClick={closeModal}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  showSuccessModal: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string
}

export default SuccessModal;