import { useState, useEffect, useCallback } from "react";

import ItemContainer from "./components/Item/ItemContainer";
import EmptyState from "./components/Item/EmptyState";
import Navbar from "./components/Navbar/Navbar";
import SuccessModal from "./components/Modals/SuccessModal";

import { fetchItems, addItem, deleteItem, editItem } from "./store/index";

const App = () => {
  const [items, setItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchKey, setSearchKey] = useState("")
  const [filterDate, setFilterDate] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const getItems = useCallback(async(top=0) => {
    const itemsFromServer = await fetchItems()
    let filteredItems = itemsFromServer
    if (filterDate !== '') {
      filteredItems = filteredItems.filter((item) =>
        item.date_added.substring(0,10) === filterDate.substring(0,10)
      )
    }

    if (searchKey !== '') {
      filteredItems = filteredItems.filter((item) => item.name.includes(searchKey))
    }

    setItems(filteredItems.reverse().slice(top, top+10))
    setItemsCount(filteredItems.length)
  }, [searchKey, filterDate])

  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    if (searchKey === '') {
      setCurrentPage(1)
    }
    getItems();
  }, [searchKey, getItems])

  useEffect(() => {
    getItems((currentPage-1)*10)
  }, [currentPage, getItems])

  //API call handlers
  const addItemHandler = async (item) => {
    await addItem(item)
    setShowSuccessModal(true)
  }

  const deleteItemHandler = async (id) => {
    await deleteItem(id)
    getItems()
  }

  const editItemHandler = async (item, id) => {
    await editItem(item, id)
    getItems()
  }

  //Search item
  const searchFunction = useCallback((key) => {
    setSearchKey(key)
  }, [])

  //Filter items
  const filterItems = async (filter) => {
    setFilterDate(filter)
  }

  //Export data
  const exporData = (date) => {
    const filteredItems = items.filter((item) =>
        item.date_added.substring(0,10) === date.substring(0,10)
      )

    const headers = Object.keys(filteredItems[0]).join(",");

    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n"
      + filteredItems.map(e => Object.values(e).join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri)
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false)
    if (currentPage !== 1) {
      setCurrentPage(1)
    } else {
      getItems()
    }
  }

  return (
    <>
      <Navbar
        onAdd={addItemHandler}
        searchItem={searchFunction}
        onFilter={filterItems}
        onExport={exporData}
      />
      <SuccessModal
        showSuccessModal={showSuccessModal}
        closeModal={handleCloseSuccess}
      />
      {items.length > 0 ? (
      <ItemContainer
        items={items}
        onDelete={deleteItemHandler}
        onEdit={editItemHandler}
        itemsCount={itemsCount}
        currentPage={currentPage}
        changePage={setCurrentPage}
      />) : (
        <EmptyState searchKey={searchKey}/>
      )}
    </>
  );
};

export default App;
