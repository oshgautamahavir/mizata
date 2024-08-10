import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types'

function ExportDropdown({ onExport }) {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');

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

  return (
    <div ref={ref}>
      <button
        className="px-3 py-2 rounded bg-gray-300 hover:bg-gray-100"
        onClick={toggleDropdown}
      >
        Export to CSV
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p className="font-medium text-lg py-1"> Export items </p>
          <p className="font-medium py-1"> Date: </p>
          <input
            type="date"
            name="date"
            id="date"
            className="py-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="py-2 mt-5">
            <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-100">
              Cancel
            </button>
            <button onClick={() => onExport(date)} className="px-4 py-2 ml-36 rounded bg-gray-400 hover:bg-gray-200">
              Export
            </button>
          </div>
        </div>
      )}
    </div>
  );
}               

ExportDropdown.propTypes = {
  onExport: PropTypes.func
}

export default ExportDropdown;
