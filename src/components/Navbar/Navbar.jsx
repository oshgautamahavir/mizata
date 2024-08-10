import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';

import PropTypes from 'prop-types'

import CreateItemModal from "../Modals/CreateItemModal";
import ExportDropdown from "../Dropdown/ExportDropdown";
import FilterDropdown from "../Dropdown/FilterDropdown";

const Navbar = ({ onAdd, searchItem, onFilter, onExport }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState('')

  const debouncedSearch = useRef(debounce((query) => {
    searchItem(query);
  }, 300)).current;

  useEffect(() => {
    if (search.length > 3 || search.length === 0) {
      debouncedSearch(search);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  return (
    <nav className="grid grid-cols-3 p-4 border border-transparent border-b-gray-400">
      <p className="text-lg font-bold self-center">Mizata</p>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="px-3 py-2 rounded border border-gray-400 w-80 mx-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-2 justify-end">
        <FilterDropdown onFilter={onFilter}/>
        <ExportDropdown onExport={onExport}/>
        <button
          onClick={toggleCreateModal}
          className="px-3 py-2 rounded bg-blue-900 hover:bg-blue-700 text-white"
        >
          Add new item
        </button>
        <CreateItemModal
          showCreateModal={showCreateModal}
          onAdd={onAdd}
          onClose={toggleCreateModal}
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onAdd: PropTypes.func,
  searchItem: PropTypes.func.isRequired,
  onFilter: PropTypes.func,
  onExport: PropTypes.func
}

export default Navbar;
