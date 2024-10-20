import { useState } from "react";
import PropTypes from 'prop-types'

import ViewItemModal from "../Modals/ViewItemModal";
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal"

const Item = ({ item, onDelete, onEdit }) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleViewModal = () => {
    setShowViewModal(!showViewModal);
  };
  
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  return (
    <div className="grid grid-cols-6 p-3 border border-transparent border-b-gray-300 hover:bg-gray-100">
      <h2>{ item.name }</h2>
      <p>{ item.description }</p>
      <p>{ item.quantity }</p>
      <p>{ item.price }</p>
      <p>{ item.status === 0 ? 'In use' : 'Returned' }</p>
      <div className="w-full grid grid-cols-3">
        <button onClick={toggleViewModal}>View</button>
        <ViewItemModal
          showViewModal={showViewModal}
          item={item}
          onClose={toggleViewModal}
          onEdit={onEdit}
        />
        <button className="" onClick={toggleDeleteModal}>Delete</button>
        <DeleteConfirmationModal 
          showDeleteModal={showDeleteModal}
          closeModal={toggleDeleteModal}
          onDelete={() => onDelete(item._id)}
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}

export default Item;
