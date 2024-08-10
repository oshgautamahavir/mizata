import { useState, useEffect, useCallback } from "react";

import ItemContainer from "./components/Item/ItemContainer";
import EmptyState from "./components/Item/EmptyState";
import Navbar from "./components/Navbar/Navbar";
import SuccessModal from "./components/Modals/SuccessModal";

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

  //Fetch items
  const fetchItems = async() => {
    const response = await fetch('http://localhost:5000/items')
    console.log(response, 'rawr')
    const data = await response.json()

    return data
  }

  //Add item
  const addItem = async (item) => {
    const today = new Date()
    item['date_added'] = today
    await fetch ('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify(item)
    })
    setShowSuccessModal(true)
  }

  //Delete item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE'
    })
    getItems((currentPage-1)*10)
  }

  //Edit item
  const editItem = async (item, id) => {
    await fetch (`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item)
    })
    getItems((currentPage-1)*10)
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
        onAdd={addItem}
        searchItem={searchFunction}
        onFilter={filterItems}
        onExport={exporData}
      />
      <SuccessModal
        showSuccessModal={showSuccessModal}
        closeModal={handleCloseSuccess}
      />
      {items.length >0 ? (
      <ItemContainer
        items={items}
        onDelete={deleteItem}
        onEdit={editItem}
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
