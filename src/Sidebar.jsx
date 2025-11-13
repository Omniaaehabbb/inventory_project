import React from "react";
import "./style.css";

const Sidebar = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      alert("You have been logged out successfully!");
     
    }
  };

  return (
    <>
      {/* 🌐 Sidebar العادية (لـ الشاشات الكبيرة) */}
      <nav className="col-md-2 d-none d-md-flex bg-light vh-100 p-3 sidebar flex-column justify-content-between">
        <div>
          {/* <img
           
             src="/images/logo2.png"
            alt="Logo"
            className="img-fluid mb-4"
            width="70px"
          /> */}
          
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                📊 Store Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                📦 Product Catalog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                🛒 Orders
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                🚚 Order Tracking
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                ⚙️ Profile Settings
              </a>
            </li>
          </ul>
        </div>

        <button
          className="logout-btn mt-auto btn btn-outline-danger w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {/* 📱 Sidebar الموبايل (Offcanvas) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Dashboard
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                📊 Store Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                📦 Product Catalog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                🛒 Orders
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                🚚 Order Tracking
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link">
                ⚙️ Profile Settings
              </a>
            </li>
          </ul>

          <button
            className="logout-btn mt-3 btn btn-outline-danger w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
