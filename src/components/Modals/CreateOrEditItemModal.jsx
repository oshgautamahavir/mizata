import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './CreateOrEditItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';
import AlertIcon from './AlertIcon';

import { addItem } from "../../store/index";
import { editItem } from "../../store/index";
import { getItem } from "../../store/index";

import SuccessModal from "./SuccessModal";

const CreateItemModal = ({ showCreateModal, onClose, onCreate, onEdit, itemId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Get the details of the item
  useEffect(() => {
    if (itemId) {
      const getItemHandler = async () => {
        const item = await getItem(itemId);
        setName(item.name)
        setDescription(item.description);
        setQuantity(item.quantity);
        setPrice(item.price);
        setStatus(item.status);
      };
      getItemHandler();
    }
  }, []);


  const handleAddItem = async () => {
    await addItem({ name, description, quantity, price, status });
    toggleSuccessModal();
  };

  const handleEditItem = async (id) => {
    await editItem ({ name, description, quantity, price, status }, itemId);
    toggleSuccessModal();
  }

  const validateForm = () => {
    if (name === '') {
      setErrorMessage('Please input item name');
    } else if (description === '') {
      setErrorMessage('Please input item description.');
    } else if (quantity === 0) {
      setErrorMessage('Please input the quantity of item.');
    } else if (price === 0) {
      setErrorMessage('Please input item price.');
    } else {
      setErrorMessage('');
      if (itemId) {
        handleEditItem();
      } else {
        handleAddItem();
      }
    }
  }

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  return showCreateModal ? (
    <div className="modal-overlay">
      <div className="modal-content create-modal" onClick={(e) => e.stopPropagation()}>
        <div className="close-button">
          <CloseButtonIcon onClose={onClose} />
        </div>
        <div className="input-container">
          <div>
            <p> Item: </p>
            <p> Description: </p>
            <p> Price: </p>
            <p> Quantity: </p>
            <p> Total Price: </p>
            <p> Status: </p>
          </div>
          <div className="inputs"> 
            <div>
              <input
                className="create-input" type="text" name="name" id="name"
                value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="create-input" type="text" name="description" id="description"
                value={description} onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              PHP
              <input
                className="create-input price" type="number" name="price" id="price"
                min="0" value={price} onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                className="create-input quantity" type="number" name="quantity" id="quantity"
                min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              PHP {quantity * price}
            </div>
            <div className="status-input">
              <div>
                <label>
                  <input
                    type="radio" name="status" value="0" id="status-in-use"
                    checked={status == 0}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  In use
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio" name="status" value="1" id="status-in-stock"
                    checked={status == 1}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  In stock
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="error-container">
          {errorMessage && (
              <div className="error-message" role="alert">
                <AlertIcon /> {errorMessage}
              </div>
          )}
        </div>
        <div className="buttons-container">
          <button onClick={onClose}> Cancel </button>
          <button
            className={itemId ? 'edit-button' : 'create-button'}
            onClick={validateForm}
          > 
            {itemId ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
      <SuccessModal
        showSuccessModal={showSuccessModal}
        closeModal={onCreate}
      />
    </div>
  ) : null;
};

CreateItemModal.propTypes = {
  showCreateModal: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func
}

export default CreateItemModal;
