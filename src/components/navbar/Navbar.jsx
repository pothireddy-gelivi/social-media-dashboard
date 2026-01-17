import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fade-in">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          Community
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Explore</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Notifications</a>
            </li>

            {/* Profile Image → PROFILE PAGE */}
            <li className="nav-item ms-3">
              <Link to="/profile">
                  <img src="https://i.pravatar.cc/40" className="profile-img" />
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
