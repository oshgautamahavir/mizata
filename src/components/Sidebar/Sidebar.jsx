import './Sidebar.css';
import DashboardIcon from './DashboardIcon';
import SalesIcon from './SalesIcon';
import SuppliersIcon from './SuppliersIcon';
import InventoryIcon from './InventoryIcon';
import ReportsIcon from './ReportsIcon';
import ManageIcon from './ManageIcon';

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
