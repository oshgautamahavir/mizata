import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './CreateItemModal.css';

import CloseButtonIcon from './CloseButtonIcon';

const CreateItemModal = ({ showCreateModal, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  return showCreateModal ? (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
          <CloseButtonIcon />
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
                className="create-input"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="create-input"
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              PHP
              <input
                className="create-input number"
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <input
                className="create-input number"
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              PHP 0
            </div>
            <div className="status-input">
              <div>
                <input type="radio" name="status" /> In use
              </div>
              <div>
                <input type="radio" name="status" /> Stocked
              </div>
            </div>
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
