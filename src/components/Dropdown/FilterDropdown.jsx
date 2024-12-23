import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types'

import './css/FilterDropdown.css';

import FilterIcon from './icons/FilterIcon';

function FilterDropdown({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("")

  const toggleDropdown = () => setIsOpen(!isOpen);

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleClearFilter = async () => {
    onFilter("")
    setFilterDate("")
  }

  return (
    <div className="filter-dropdown">
      <div ref={ref}>
        <button className={`filter-cion ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
          <FilterIcon />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <p className="font-medium text-lg py-1"> Filter items </p>
            <p className="font-medium py-1"> Date added: </p>
            <input
              type="date"
              name="filterDate"
              id="filterDate"
              className="py-1 ml-4"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <p className="font-medium py-1"> Status </p>
            <input
              type="checkbox"
              name="checkboxInUse"
              id="checkboxInUse"
              className="py-1"
            />
            <label htmlFor="checkboxInUse" className="px-2">
              In use
            </label>
            <input
              type="checkbox"
              name="checkboxReturned"
              id="checkboxReturned"
              className="py-1"
            />
            <label htmlFor="checkboxReturned" className="px-2">
              Returned
            </label>
            <div className="py-2 mt-5">
              <button onClick={handleClearFilter} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-100">
                Clear
              </button>
              <button onClick={() => onFilter(filterDate)} className="px-4 py-2 ml-36 rounded bg-gray-400 hover:bg-gray-200">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

FilterDropdown.propTypes = {
  onFilter: PropTypes.func
}

export default FilterDropdown;
