import './Sidebar.css';

const Sidebar = ({}) => {
    return (
      <nav className="sidebar">
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="36px"
          height="36px"
        >
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zM13 3v6h8V3h-8z" />
        </svg>
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
        <button>
          Rawr
        </button>
      </nav>
    );
};

export default Sidebar;
