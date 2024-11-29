import PropTypes from 'prop-types'

import './css/EditConfirmationModal.css';

import SettingsIcon from './icons/SettingsIcon';

const EditConfirmationModal = ({ showConfirmModal, closeModal, onEdit }) => {
  if (!showConfirmModal) return null;

  return (
    <div className="modal-overlay">
      <div className="confirm-modal">
        <div className="icon">
          <SettingsIcon />
        </div>
        <p> Do you want to save these changes? </p>
        <div className="button-container">
            <button className="cancel" onClick={closeModal}>Cancel</button>
            <button className="yes" onClick={onEdit}>Yes</button>
        </div>
      </div>
    </div>
  );
};

EditConfirmationModal.propTypes = {
  showConfirmModal: PropTypes.bool,
    closeModal: PropTypes.func,
    onEdit: PropTypes.func
}

export default EditConfirmationModal;