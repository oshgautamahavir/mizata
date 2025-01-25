import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';

import './css/InventoryPage.css';

import InventoryIcon from './icons/InventoryIcon';
import ListIcon from './icons/ListIcon';
import CheckIcon from './icons/CheckIcon';
import PaperIcon from './icons/PaperIcon';
import WrongIcon from './icons/WrongIcon';

import Item from './Item';
import ViewItemModal from '../Modals/ViewItemModal';
import CreateOrEditModal from '../Modals/CreateOrEditItemModal';
import EmptyState from './EmptyState';
import FilterDropdown from "../Dropdown/FilterDropdown";

import { fetchItems } from "../../store/index";

const InventoryPage = ({}) => {
  const [items, setItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [id, setId] = useState('');
  const [searchKey, setSearchKey] = useState("")
  const [entries, setEntries]= useState(10) // Default value show 10 items

  const searchKeyRef = useRef(searchKey);
  const entriesRef = useRef(entries);

  const toggleViewModal = () => {
    setShowViewModal(!showViewModal);
  };

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  // We set the id to none first so we will know that this is on
  // create mode because it has no id passed. This function will
  // be called from clicking the new item button
  const openCreateModal = () => {
    setId('');
    toggleCreateModal();
  }
  
  // This just closes the view modal and open the edit modal and
  // there is already an id set during opening the view modal so
  // no need to set it again
  const openEditModal = () => {
    toggleViewModal();
    toggleCreateModal();
  }

  const setIdHandler = (id) => {
    setId(id);
    toggleViewModal();
  }

  useEffect(() => {
    searchKeyRef.current = searchKey;
  }, [searchKey]);

  useEffect(() => {
    entriesRef.current = entries;
  }, [entries]);

  // Fetch items handler
  const fetchItemsHandler = async (filterDate="", statuses="") => {
    const itemsFromServer = await fetchItems(
      searchKeyRef.current, entriesRef.current, filterDate, statuses
    );

    setItems(itemsFromServer.items);
    setItemsCount(itemsFromServer.count);
  };

  // Initial fetch items
  useEffect(() => {
    if (!searchKey) {
      fetchItemsHandler();
    }
  }, []);

  // Delay search call by 300 ms
  const debouncedSearch = useRef(debounce(() => {
    fetchItemsHandler();
  }, 300)).current;

  useEffect(() => {
    if (searchKey.length > 3 || searchKey.length === 0) {
      debouncedSearch();
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchKey]);

  useEffect(() => {
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [entries])

  const onCreateHandler = () => {
    toggleCreateModal();
    fetchItemsHandler();
  }

  const onDeleteHandler = () => {
    toggleViewModal();
    fetchItemsHandler();
  }

  const onFilter = (filterDate, inUse, inStock) => {
    const IN_USE = 0;
    const IN_STOCK = 1;

    let statuses = [];

    if (inUse) {
      statuses.push(IN_USE);
    }
    if (inStock) {
      statuses.push(IN_STOCK);
    }
  
    fetchItemsHandler(filterDate, statuses);
  }

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
          <div className="search-filter">
            <FilterDropdown onFilter={onFilter} />
            <div className='search-container'>
              Search:
              <input type='text' className='search-box' id='search'
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </div>
          </div>
          <div className='show-entries'>
            Show
            <input type='number' className='input-number' id='entries'
              min='1' value={entries} onChange={(e) => setEntries(e.target.value)}
            />
            entries
          </div>
          <div className='create-button'>
            <button className="button" onClick={openCreateModal}>
              + Add item
            </button>
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
          {items.length > 0 ? (
          <div className='inventory-items'>
            {items.map((item) => (
              <Item
                key={item._id}
                item={item}
                onClick={() => setIdHandler(item._id)}
              />
            ))}
          </div> ) : (
            <EmptyState searchKey={searchKey} />
          )}
        </div>
      </div>
      {showViewModal ? (
      <ViewItemModal
        showViewModal={showViewModal}
        itemId={id}
        onClose={toggleViewModal}
        onDelete={onDeleteHandler}
        onEdit={openEditModal}
      />) : null}
      {showCreateModal ? (
      <CreateOrEditModal
        itemId={id}
        showCreateModal={showCreateModal}
        onClose={toggleCreateModal}
        onCreate={onCreateHandler}
      />) : null}
    </>
  );
};
  
  export default InventoryPage;
