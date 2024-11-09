import { useState, useEffect } from "react";

import './InventoryPage.css';

import InventoryIcon from './InventoryIcon';
import ListIcon from './ListIcon';
import CheckIcon from './CheckIcon';
import PaperIcon from './PaperIcon';
import WrongIcon from './WrongIcon';

import Item from './Item2';
import ViewItemModal from "../Modals/ViewItemModal2";

import { fetchItems } from "../../store/index";

const InventoryPage = ({}) => {
  const [items, setItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [searchKey, setSearchKey] = useState("")
  const [filterDate, setFilterDate] = useState("")
  const [showViewModal, setShowViewModal] = useState(false);
  const [id, setId] = useState('');

  const toggleViewModal = () => {
    setShowViewModal(!showViewModal);
  };

  const setIdHandler = (id) => {
    setId(id);
    toggleViewModal();
  }

  //Fetch items handler
  useEffect(() => {
    const fetchItemsHandler = async () => {
      const itemsFromServer = await fetchItems(searchKey);
      setItems(itemsFromServer.items);
      setItemsCount(itemsFromServer.count);
    };
    fetchItemsHandler();
  }, [searchKey, filterDate]);

  return (
    <>
      <div className='title'>
        <InventoryIcon />
        <p>
            Inventory
        </p>
      </div>
      <div className='tabs'>
        <div className='tab'>
          <ListIcon />
          Inventory
        </div>
        <div className='tab'>
          <CheckIcon />
          Executed
        </div>
        <div className='tab'>
          <PaperIcon />
          Draft
        </div>
        <div className='tab'>
          <WrongIcon />
          Cancelled
        </div>
      </div>
      <div className='inventory'>
        <div className='header'>
          <div className='show-entries'>
            Show <input type='number' className='input-number' /> entries
          </div>
          <div className='search-container'>
            Search:
            <input type='text' className='search-box' />
          </div>
        </div>
        <div className='inventory-table'>
          <div className='column-names'>
            <p>Items</p>
            <p>Quantity</p>
            <p>Date</p>
            <p>Price</p>
            <p>Status</p>
          </div>
          <div className='inventory-items'>
            {items.map((item) => (
              <Item
                key={item._id}
                item={item}
                onClick={() => setIdHandler(item._id)}
              />
            ))}
          </div>
        </div>
      </div>
      {showViewModal ? (
      <ViewItemModal
        showViewModal={showViewModal}
        itemId={id}
        onClose={toggleViewModal}
      />) : null}
    </>
  );
};
  
  export default InventoryPage;