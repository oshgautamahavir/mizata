import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './ViewItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';

import { getItem } from "../../store/index";

function getFormattedDate(dateString) {
  const date = new Date(dateString)

  return date.toLocaleDateString(
    'en-us', { year:"numeric", month:"long", day:"numeric"})
}

const ViewItemModal = ({ showViewModal, onClose, itemId }) => {
  const [item, setItem] = useState({})

  // Get the details of the item
  useEffect(() => {
    const getItemHandler = async () => {
      const item = await getItem(itemId);
      setItem(item);
    };
    getItemHandler();
  });

  return showViewModal ? (
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
          <div>
            <p><b> {item.name} </b></p>
            <p> What a hammer </p>
            <p> {getFormattedDate(item.createdAt)} </p>
            <p> PHP {item.price} </p>
            <p> {item.quantity} </p>
            <p> PHP {item.price * item.quantity} </p>
            <p> <div className="status-circle" /> In use </p>
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

ViewItemModal.propTypes = {
  showViewModal: PropTypes.bool,
  itemId: PropTypes.string,
  onClose: PropTypes.func,
}

export default ViewItemModal;
