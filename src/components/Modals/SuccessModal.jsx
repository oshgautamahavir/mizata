import PropTypes from 'prop-types'

const SuccessModal = ({ showSuccessModal, closeModal }) => {
  if (!showSuccessModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-64 h-32 ml-8 mt-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p className="success-modal-message"> Item has been successfully created. </p>
        <button className="dismiss-button" onClick={closeModal}>Dismiss</button>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  showSuccessModal: PropTypes.bool,
  closeModal: PropTypes.func
}

export default SuccessModal;