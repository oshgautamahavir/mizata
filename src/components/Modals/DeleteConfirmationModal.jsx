import PropTypes from 'prop-types'

const DeleteConfirmationModal = ({ showDeleteModal, closeModal, onDelete }) => {
  if (!showDeleteModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-success">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-64 h-32 ml-8 mt-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        </div>
        <p className="success-modal-message"> Are you sure you wanto delete this item? </p>
        <div>
            <button className="mx-2 w-24 p-2.5 bg-white text-red-500 border border-red-500 rounded-md cursor-pointer" onClick={closeModal}>Cancel</button>
            <button className="w-24 p-2.5 bg-red-500 text-white rounded-md cursor-pointer" onClick={onDelete}>Yes</button>
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