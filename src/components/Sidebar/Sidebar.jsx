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
        </button>
        <button>
          <SalesIcon />
        </button>
        <button>
          <SuppliersIcon />
        </button>
        <button>
          <InventoryIcon />
        </button>
        <button>
          <ReportsIcon />
        </button>
        <button>
          <ManageIcon />
        </button>
      </nav>
    );
};

export default Sidebar;
