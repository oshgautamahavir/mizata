const BASE_URL = 'http://localhost:3000/api/items'

// Fetch items
const fetchItems = async(searchKey, entries, date, statuses) => {
    const response = await fetch(
        `${BASE_URL}?search=${searchKey}&entries=${entries}&date=${date}&statuses=${statuses}`
    )
    const data = await response.json()

    return data
}

// Add item
const addItem = async (item) => {
    await fetch (BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify(item)
    })
}

// Delete item
const deleteItem = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
}

// Edit item
const editItem = async (item, id) => {
    await fetch (`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

// Get single item
const getItem = async(id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data = await response.json()

    return data
}

export { fetchItems, addItem, deleteItem, editItem, getItem }
