import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './ViewItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';

const ViewItemModal = ({ showViewModal, onClose, itemId }) => {
  if (!showViewModal) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button">
          <CloseButtonIcon />
        </div>
        <div className="details">
          <div>
            <p> Item: </p>
            <p> Description: </p>
            <p> Added on: </p>
            <p> Price: </p>
            <p> Quantity: </p>
            <p> Total Price: </p>
            <p> Status: </p>
          </div>
          <div>
            <p> Hammer </p>
            <p> What a hammer </p>
            <p> November 6, 2024 </p>
            <p> PHP 300: </p>
            <p> 4 </p>
            <p> PHP 1200 </p>
            <p> <div className="status-circle" /> In use </p>
          </div>
        </div>
        <div className="buttons-container">
          <button className="delete-button"> Delete </button>
          <button> Edit </button>
        </div>
      </div>
    </div>
  );
};

ViewItemModal.propTypes = {
  showViewModal: PropTypes.bool,
  itemId: PropTypes.string,
  onClose: PropTypes.func,
}

export default ViewItemModal;
