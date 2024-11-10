import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './ViewItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';

const CreateItemModal = ({ showCreateModal, onClose }) => {

  return showCreateModal ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
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
        </div>
        <div className="buttons-container">
          <button className="delete-button"> Delete </button>
          <button> Edit </button>
        </div>
      </div>
    </div>
  ) : null;
};

CreateItemModal.propTypes = {
  showCreateModal: PropTypes.bool,
  onClose: PropTypes.func,
}

export default CreateItemModal;
