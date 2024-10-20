import PropTypes from 'prop-types'

import Pagination from "../Pagination/Pagination";
import Item from "./Item";

const ItemContainer = ({ items, onDelete, onEdit, itemsCount, currentPage, changePage }) => {
  return (
    <>
      <div className="grid grid-cols-1 py-4">
        <div className="grid grid-cols-6 px-3 pb-4 border border-transparent border-b-gray-400">
          <p className="font-bold">ITEM NAME</p>
          <p className="font-bold">DESCRIPTION</p>
          <p className="font-bold">QUANTITY</p>
          <p className="font-bold">PRICE</p>
          <p className="font-bold">STATUS</p>
        </div>
        {items.map((item) => (
          <Item
            key={item._id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
      <Pagination
        maxPages={Math.ceil(itemsCount/10)}
        currentPage={currentPage}
        changePage={changePage}
      />
    </>
  );
};

ItemContainer.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  itemsCount: PropTypes.number,
  currentPage: PropTypes.number,
  changePage: PropTypes.func
}

export default ItemContainer;
