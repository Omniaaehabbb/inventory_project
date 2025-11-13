// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";
import ProductCatalog from "./ProductCatalog";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ لتخزين نص البحث

  // ✅ دالة البحث (تستقبل النص من Navbar)
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // ✅ دالة لإضافة أو إزالة المنتج من السلة
  const toggleCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <div className="col-md-10 ms-sm-auto px-4">
          {/* ✅ نمرر دالة البحث + عدد السلة */}
          <Navbar onSearch={handleSearch} cartCount={cartItems.length} />

          {/* ✅ نمرر مصطلح البحث لصفحة المنتجات */}
          <div className="container mt-4">
            <ProductCatalog
              toggleCart={toggleCart}
              cartItems={cartItems}
              searchTerm={searchTerm} // ✅ هنا بنبعت النص اللي المستخدم كتبه
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
