import PropTypes from 'prop-types'

const EditConfirmationModal = ({ showEditModal, closeModal, onEdit }) => {
  if (!showEditModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-success">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFBF00" className="w-64 h-32 ml-8 mt-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>

        </div>
        <p className="success-modal-message"> Do you want to save these changes? </p>
        <div>
            <button className="mx-2 w-24 p-2.5 bg-white text-yellow-500 border border-yellow-500 rounded-md cursor-pointer" onClick={closeModal}>Cancel</button>
            <button className="w-24 p-2.5 bg-yellow-500 text-white rounded-md cursor-pointer" onClick={onEdit}>Yes</button>
        </div>
      </div>
    </div>
  );
};

EditConfirmationModal.propTypes = {
    showEditModal: PropTypes.bool,
    closeModal: PropTypes.func,
    onEdit: PropTypes.func
}

export default EditConfirmationModal;