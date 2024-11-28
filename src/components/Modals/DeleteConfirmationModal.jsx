import PropTypes from 'prop-types'

import TrashIcon from './TrashIcon';

import './DeleteConfirmationModal.css'

const DeleteConfirmationModal = ({ showDeleteModal, closeModal, onDelete }) => {
  if (!showDeleteModal) return null;

  //TODO: Transfer and convert the tailwind css to normal css and to another file

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