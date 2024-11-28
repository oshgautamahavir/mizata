import PropTypes from 'prop-types'

import TrashIcon from './icons/TrashIcon';

import './css/DeleteConfirmationModal.css'

const DeleteConfirmationModal = ({ showDeleteModal, closeModal, onDelete }) => {
  if (!showDeleteModal) return null;

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <div className="icon">
          <TrashIcon />
        </div>
        <p> Are you sure you wanto delete this item? </p>
        <div className="button-container">
            <button className="cancel" onClick={closeModal}>Cancel</button>
            <button className="yes" onClick={onDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationModal.propTypes = {
    showDeleteModal: PropTypes.bool,
    closeModal: PropTypes.func,
    onDelete: PropTypes.func
}

export default DeleteConfirmationModal;