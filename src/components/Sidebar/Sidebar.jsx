import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-logo">Community</h3>

      <nav className="sidebar-menu">
        <Link to="/" className="menu-item">
          <i className="bi bi-house"></i>
          <span>Home</span>
        </Link>

        <div className="menu-item">
          <i className="bi bi-search"></i>
          <span>Explore</span>
        </div>

        <Link to="/Notifications" className="menu-item">
            <i className="bi bi-heart"></i>
            <span>Notifications</span>
        </Link>


        <Link to="/profile" className="menu-item">
            <img src="https://i.pravatar.cc/40" className="profile-img" /> 
          <span>Profile</span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
