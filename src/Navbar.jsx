// src/components/Navbar.jsx
import React, { useState } from "react";
import "./style.css"; 

const Navbar = ({ onSearch, cartCount }) => {
  const [searchValue, setSearchValue] = useState("");

  // دالة البحث
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value); // تبعت النص للصفحة اللي فيها المنتجات
  };

  return (
    <nav className="navbar navbar-light bg-white p-3 mb-3 shadow-sm d-flex justify-content-between align-items-center">
      {/* زر فتح السايدبار في الموبايل */}
      <button
        className="btn btn-outline-secondary d-md-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
      >
        ☰
      </button>

      {/* مربع البحث */}
      <form
        className="d-flex flex-grow-1 mx-3 search-form"
        onSubmit={(e) => e.preventDefault()} // يمنع الريلود
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products, warehouses..."
          aria-label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>

      {/* الأزرار اليمين */}
      <div className="d-flex align-items-center icons-group">
        {/* السلة */}
        <button className="btn btn-light position-relative me-3 cart-btn">
          🛒
          {cartCount > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {cartCount}
            </span>
          )}
        </button>

        {/* الإشعارات */}
        <button className="btn btn-light me-3 notification-btn">
          🔔
        </button>

        {/* صورة المستخدم */}
        <img
          src="/images/user.jpg"
          alt="User"
          className="rounded-circle profile-img"
          width="40"
        />
      </div>
    </nav>
  );
};

export default Navbar;
