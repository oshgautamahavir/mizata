const BASE_URL = 'http://localhost:3000/api/items'

//Fetch items
const fetchItems = async(searchKey) => {
    const response = await fetch(`${BASE_URL}?search=${searchKey}`)
    const data = await response.json()

    return data
}

//Add item
const addItem = async (item) => {
    await fetch (BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify(item)
    })
}

//Delete item
const deleteItem = async (id) => {
    await fetch(BASE_URL + '/' + id, {
        method: 'DELETE'
    })
}

//Edit item
const editItem = async (item, id) => {
    await fetch (BASE_URL + '/' + id, {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

export { fetchItems, addItem, deleteItem, editItem }
