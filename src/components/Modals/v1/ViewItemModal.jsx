import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

import EditConfirmationModal from "../EditConfirmationModal"


const ViewItemModal = ({ showViewModal, onClose, onEdit, item }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("")
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(false)

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setQuantity(item.quantity);
    setPrice(item.price);
    setDate(item.createdAt);
  }, [item])

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  if (!showViewModal) {
    return null;
  }

  const toggleEditMode = () => {
    setEditable(!editable);
  };

  const toggleConfirmEditModal = () => {
    setShowConfirmEditModal(!showConfirmEditModal)
  }

  const handleEditItem = () => {
    onEdit({ name, description, quantity, price, 'status': 0 }, item._id)
    toggleEditMode()
    toggleConfirmEditModal()
    onClose()
  }

  function Button({ isEdit }) {
    return (
      <button
            onClick={ isEdit ? toggleConfirmEditModal : toggleEditMode }
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-200 ml-2"
          >
            { isEdit ? 'Save' : 'Edit'}
          </button>
    );
  }

  Button.propTypes = {
    isEdit: PropTypes.bool
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
            disabled={!editable}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            className="description"
            rows="10"
            value={description}
            disabled={!editable}
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
            value={quantity}
            disabled={!editable}
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
            value={price}
            disabled={!editable}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="py-2 grid grid-cols-4">
          <span> Total Price: </span>
          <span className="col-span-3 pl-10">PHP {totalPrice.toFixed(2)}</span>
        </div>
        <div className="py-2 grid grid-cols-3">
          <span> Date added: </span>
          <p> {date} </p>
        </div>
        <div className="py-3 ml-64 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-50 ml-2"
          >
            Cancel
          </button>
          <Button isEdit={editable}/ >
          <EditConfirmationModal
            showEditModal={showConfirmEditModal}
            closeModal={toggleConfirmEditModal}
            onEdit={handleEditItem}
          />
        </div>
      </div>
    </div>
  );
};

ViewItemModal.propTypes = {
  showViewModal: PropTypes.bool,
  item: PropTypes.object,
  onClose: PropTypes.func,
  onEdit: PropTypes.func
}

export default ViewItemModal;
