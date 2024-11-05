import { useState, useEffect } from "react";
import PropTypes from 'prop-types'


const ViewItemModal = ({ showViewModal, onClose, item }) => {
  if (!showViewModal) {
    return null;
  }

  const toggleConfirmEditModal = () => {
    setShowConfirmEditModal(!showConfirmEditModal)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>
          rawr
        </div>
      </div>
    </div>
  );
};

ViewItemModal.propTypes = {
  showViewModal: PropTypes.bool,
  item: PropTypes.object,
  onClose: PropTypes.func,
}

export default ViewItemModal;
