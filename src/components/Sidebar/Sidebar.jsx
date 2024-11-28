import './css/Sidebar.css';

import DashboardIcon from './icons/DashboardIcon';
import SalesIcon from './icons/SalesIcon';
import SuppliersIcon from './icons/SuppliersIcon';
import InventoryIcon from './icons/InventoryIcon';
import ReportsIcon from './icons/ReportsIcon';
import ManageIcon from './icons/ManageIcon';

const Sidebar = ({}) => {
    return (
      <nav className="sidebar">
        <button>
          <DashboardIcon />
          Dashboard
        </button>
        <button>
          <SalesIcon />
          Sales
        </button>
        <button>
          <SuppliersIcon />
          Suppliers
        </button>
        <button>
          <InventoryIcon />
          Inventory
        </button>
        <button>
          <ReportsIcon />
          Reports
        </button>
        <button>
          <ManageIcon />
          Manage
        </button>
      </nav>
    );
};

export default Sidebar;
