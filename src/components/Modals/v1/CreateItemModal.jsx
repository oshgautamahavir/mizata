import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

const CreateItemModal = ({ showCreateModal, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  useEffect(() => {
    if (showCreateModal) {
      setName("")
      setDescription("")
      setQuantity(0)
      setPrice(0)
      setTotalPrice(0)
      setErrorMessage('')
    }
  }, [showCreateModal])

  if (!showCreateModal) {
    return null;
  }

  const handleCreateItem = () => {
    onAdd({ name, description, quantity, price, 'status': 0 })
    onClose()
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
      handleCreateItem()
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <input
            className="item-name"
            type="text"
            name="name"
            id="name"
            placeholder="Name of the item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            className="description"
            rows="10"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <p className="text-lg font-bold py-4">Item description</p>
        <div className="py-2 grid grid-cols-4">
          <span> Quantity: </span>
          <input
            className="col-span-3 border border-gray-400 w-65 h-8 mx-16"
            type="number"
            name="quantity"
            id="quantity"
            placeholder="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="py-2 grid grid-cols-4">
          <span> Unit Price: </span>
          <input
            className="col-span-3 border border-gray-400 w-65 h-8 mx-16"
            type="number"
            name="price"
            id="price"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="py-2 grid grid-cols-4">
          <span> Total Price: </span>
          <span className="col-span-3">PHP {totalPrice.toFixed(2)}</span>
        </div>
        {errorMessage && (
            <div className="flex items-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              {errorMessage}
            </div>
          )}
        <div className="py-3 ml-64 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-50 ml-2"
          >
            Cancel
          </button>
          <button
            onClick={validateForm}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-200 ml-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

CreateItemModal.propTypes = {
  showCreateModal: PropTypes.bool,
  onClose: PropTypes.func,
  onAdd: PropTypes.func
}

export default CreateItemModal;
