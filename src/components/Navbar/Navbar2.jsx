import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';

import './Navbar.css';
import logo from './mizata-logo.png';


// import PropTypes from 'prop-types'

// import CreateItemModal from "../Modals/CreateItemModal";
// import ExportDropdown from "../Dropdown/ExportDropdown";
// import FilterDropdown from "../Dropdown/FilterDropdown";

const Navbar = ({}) => {
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [search, setSearch] = useState('')

//   const debouncedSearch = useRef(debounce((query) => {
//     searchItem(query);
//   }, 300)).current;

//   useEffect(() => {
//     if (search.length > 3 || search.length === 0) {
//       debouncedSearch(search);
//     }

//     return () => {
//       debouncedSearch.cancel();
//     };
//   }, [search, debouncedSearch]);

//   const toggleCreateModal = () => {
//     setShowCreateModal(!showCreateModal);
//   };

  return (
    <nav>
        <img src={logo} alt="oten" />
    </nav>
  );
};

// Navbar.propTypes = {
//   onAdd: PropTypes.func,
//   searchItem: PropTypes.func.isRequired,
//   onFilter: PropTypes.func,
//   onExport: PropTypes.func
// }

export default Navbar;
