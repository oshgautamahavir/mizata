import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './CreateItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';
import AlertIcon from './AlertIcon';

import { addItem } from "../../store/index";

const CreateItemModal = ({ showCreateModal, onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddItem = async () => {
    await addItem({ name, description, quantity, price, status });
    onCreate();
  };

  const validateForm = () => {
    if (name === '') {
      setErrorMessage('Please input item name')
    } else if (description === '') {
      setErrorMessage('Please input item description.')
    } else if (quantity === 0) {
      setErrorMessage('Please input the quantity of item.')
    } else if (price === 0) {
      setErrorMessage('Please input item price.')
    } else {
      setErrorMessage('')
      handleAddItem()
    }
  }

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
                className="create-input price" type="number" name="quantity" id="quantity"
                value={quantity} onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <input
                className="create-input quantity" type="number" name="price" id="price"
                value={price} onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              PHP {quantity * price}
            </div>
            <div className="status-input">
              <div>
                <label>
                  <input
                    type="radio" name="status" value="0"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  In use
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio" name="status" value="1"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  Stocked
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
          <button className="delete-button" onClick={validateForm}> Create </button>
        </div>
      </div>
    </div>
  ) : null;
};

CreateItemModal.propTypes = {
  showCreateModal: PropTypes.bool,
  onClose: PropTypes.func,
  onCreate: PropTypes.func
}

export default CreateItemModal;
