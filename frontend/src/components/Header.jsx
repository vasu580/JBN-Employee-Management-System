import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("logged");

    navigate("/login");
  };

  return (
    <nav className="navbar fixed-top header-navbar">
      <div className="container">

        {/* =========================
            BRAND
        ========================= */}
        <Link
          to="/"
          className="text-decoration-none d-flex align-items-center"
        >
          {/* Logo */}
          <div className="header-logo">
            JBN
          </div>

          {/* Company Name */}
          <div className="header-company">
            <strong>
              JBN INNOTECH PVT LTD
            </strong>

            <span>
              EMPLOYEE MANAGEMENT SYSTEM
            </span>
          </div>
        </Link>

        {/* =========================
            RIGHT SIDE
        ========================= */}
        {localStorage.getItem("logged") && (
          <div className="d-flex align-items-center">

            {/* Admin */}
            <div className="admin-box">

              {/* User Icon */}
              <div className="user-icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <span>
                Welcome, Admin
              </span>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="logout-button"
            >
              {/* Logout Icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>

              Logout
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;