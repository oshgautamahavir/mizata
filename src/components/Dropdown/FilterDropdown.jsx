import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types'

import './css/FilterDropdown.css';

import FilterIcon from './icons/FilterIcon';

function FilterDropdown({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");

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
      <div className="filter-ref" ref={ref}>
        <button className={`filter-icon ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
          <FilterIcon />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <p> Date: </p>
            <div className="date-container">
              <input
                type="date"
                name="filterDate"
                id="filterDate"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>
            <p> Status: </p>
            <div className="status-container">
              <div>
                <input
                  type="checkbox"
                  name="checkboxInUse"
                  id="checkboxInUse"
                />
                <label htmlFor="checkboxInUse">
                  In use
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checkboxReturned"
                  id="checkboxReturned"
                />
                <label htmlFor="checkboxReturned">
                  Returned
                </label>
              </div>
            </div>
            <div className="button-container">
              <button onClick={handleClearFilter}>
                Clear
              </button>
              <button onClick={() => onFilter(filterDate)}>
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
