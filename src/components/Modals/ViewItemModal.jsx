import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './css/ViewItemModal.css';

import CloseButtonIcon from './icons/CloseButtonIcon';

import { getItem } from "../../store/index";
import { deleteItem } from "../../store/index";

import DeleteConfirmationModal from "./DeleteConfirmationModal";
import SuccessModal from "./SuccessModal";

function getFormattedDate(dateString) {
  const date = new Date(dateString)

  return date.toLocaleDateString(
    'en-us', { year:"numeric", month:"long", day:"numeric"})
}

const ViewItemModal = ({ showViewModal, onClose, itemId, onDelete, onEdit }) => {
  const [item, setItem] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Get the details of the item
  useEffect(() => {
    if (showViewModal) {
      const getItemHandler = async () => {
        const item = await getItem(itemId);
        setItem(item);
      };
      getItemHandler();
    }
  }, []);

  const deleteItemHandler = async () => {
    await deleteItem(itemId);
    toggleConfirmationModal();
    toggleSuccessModal();
  }

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const toggleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  return showViewModal ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content view-modal" onClick={(e) => e.stopPropagation()}>
        <div className="close-button">
          <CloseButtonIcon onClose={onClose} />
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
            <p> {item.description} </p>
            <p> {getFormattedDate(item.createdAt)} </p>
            <p> PHP {item.price} </p>
            <p> {item.quantity} </p>
            <p> PHP {item.price * item.quantity} </p>
            <div className="status">
              <div className={"status-circle " + (item.status ? 'orange' : 'green')} />
              {item.status ? 'In stock' : 'In use'}
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="delete-button" onClick={toggleConfirmationModal}> Delete </button>
          <button onClick={onEdit}> Edit </button>
        </div>
        {showConfirmationModal ? (
          <DeleteConfirmationModal 
            showDeleteModal={showConfirmationModal}
            closeModal={toggleConfirmationModal}
            onDelete={deleteItemHandler}
          />
        ) : null}
        {showSuccessModal ? (
        <SuccessModal
          showSuccessModal={showSuccessModal}
          closeModal={onDelete}
          message='removed'
        />
      ) : null}
      </div>
    </div>
  ) : null;
};

ViewItemModal.propTypes = {
  showViewModal: PropTypes.bool,
  itemId: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}

export default ViewItemModal;
