import './Sidebar.css';
import { default as moneyIcon} from './money.svg'
import { default as dashboardIcon } from './dashboard.svg'

const Sidebar = ({}) => {
    return (
      <nav className="sidebar">
        <button>
          <img src={dashboardIcon} />
        </button>
        <button>
          <img src={moneyIcon} />
        </button>
        <button>
          Rawr
        </button>
        <button>
          Rawr
        </button>
        <button>
          Rawr
        </button>
        <button>
          Rawr
        </button>
      </nav>
    );
};

export default Sidebar;
