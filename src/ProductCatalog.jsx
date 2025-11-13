import React, { useState } from "react";
import "./style.css";

const ProductCatalog = ({ toggleCart, cartItems, searchTerm }) => {
    const products = [
        {
            id: 1,
            name: "Organic Gala",
            description: "Crisp and sweet organic apples, perfect for snacks.",
            price: "$24.99 / 20kg box",
            warehouse: "City Central Warehouse",
            distance: "5 miles away",
            image: "./images/apple.jpg",
        },
        {
            id: 2,
            name: "Bananas",
            description: "Fresh yellow bananas sourced locally.",
            price: "$19.99 / 15kg box",
            warehouse: "East Warehouse",
            distance: "8 miles away",
            image: "./images/banana.jpg",
        },
        {
            id: 3,
            name: "Whole Milk",
            description: "Creamy whole milk packed fresh daily.",
            price: "$29.99 / 24L",
            warehouse: "North Warehouse",
            distance: "10 miles away",
            image: "./images/milk.jpg",
        },
        {
            id: 4,
            name: "Bread Loaf",
            description: "Soft and fresh bakery bread loafs daily.",
            price: "$14.99 / 10 loaves",
            warehouse: "City Central Warehouse",
            distance: "3 miles away",
            image: "./images/bread.jpg",
        },
        {
            id: 5,
            name: "Orange Juice",
            description: "100% pure and fresh orange juice bottles.",
            price: "$34.99 / 12 bottles",
            warehouse: "South Warehouse",
            distance: "6 miles away",
            image: "./images/juice.jpg",
        },
        {
            id: 6,
            name: "Organic Eggs",
            description: "Cage-free organic eggs with rich taste.",
            price: "$12.99 / 30 eggs",
            warehouse: "West Warehouse",
            distance: "7 miles away",
            image: "./images/eggs.jpg",
        },
        {
            id: 7,
            name: "Carrots",
            description: "Fresh crunchy carrots, perfect for cooking.",
            price: "$9.99 / 10kg",
            warehouse: "East Warehouse",
            distance: "9 miles away",
            image: "./images/carrots.jpg",
        },
        {
            id: 8,
            name: "Basmati Rice",
            description: "Premium aged basmati rice, extra-long grains.",
            price: "$49.99 / 25kg",
            warehouse: "North Warehouse",
            distance: "15 miles away",
            image: "./images/rice.jpg",
        },
        {
            id: 9,
            name: "Pasta Pack",
            description: "Durum wheat pasta packs, ready to cook.",
            price: "$22.99 / 12 packs",
            warehouse: "Central Warehouse",
            distance: "4 miles away",
            image: "./images/pasta.jpg",
        },
        {
            id: 10,
            name: "Fresh Chicken",
            description: "Freshly processed chicken, farm raised.",
            price: "$59.99 / 10kg",
            warehouse: "South Warehouse",
            distance: "12 miles away",
            image: "./images/chicken.jpg",
        },
        {
            id: 11,
            name: "Cheddar Cheese",
            description: "Rich, creamy cheddar cheese for all recipes.",
            price: "$39.99 / 5kg",
            warehouse: "Central Warehouse",
            distance: "5 miles away",
            image: "./images/cheese.jpg",
        },
        {
            id: 12,
            name: "Butter",
            description: "Creamy, smooth butter from fresh milk.",
            price: "$29.99 / 2kg",
            warehouse: "West Warehouse",
            distance: "6 miles away",
            image: "./images/butter.jpg",
        },
    ];


    // 🔍 فلترة المنتجات بناءً على نص البحث
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );

    return (
        <div className="main-content container-fluid">
            <div className="row">
                {/* ✅ الفلاتر الجانبية */}
                <div className="col-lg-3 mb-3">
                    <h5>Filters</h5>
                    <div className="mb-3">
                        <h6>Categories</h6>
                        <div><input type="checkbox" /> Fruits & Vegetables</div>
                        <div><input type="checkbox" /> Dairy & Eggs</div>
                        <div><input type="checkbox" /> Packaged Goods</div>
                        <div><input type="checkbox" /> Beverages</div>
                        <div><input type="checkbox" /> Bakery</div>
                    </div>
                    <div className="mb-3">
                        <h6>Warehouse Proximity</h6>
                        <div><input type="checkbox" name="distance" /> Local (Within 10 miles)</div>
                        <div><input type="checkbox" name="distance" /> Regional (10-50 miles)</div>
                        <div><input type="checkbox" name="distance" /> National (50+ miles)</div>
                    </div>
                    <div>
                        <h6>Price Range</h6>
                        <input
                            type="range"
                            name="price"
                            id="priceRange"
                            min="0"
                            max="100"
                            step="5"
                            className="form-range"
                        />
                        <div className="d-flex justify-content-between">
                            <span>$0</span>
                            <span>$100</span>
                        </div>
                    </div>
                </div>

                {/* ✅ المنتجات */}
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>All Products</h5>
                        <select className="form-select w-auto">
                            <option>Sort by: Relevance</option>
                        </select>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {filteredProducts.map((product) => {
                            const inCart = cartItems.find((item) => item.id === product.id);

                            return (
                                <div className="col" key={product.id}>
                                    <div className="card h-100">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.name}
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{product.name}</h6>
                                            <p className="card-text">{product.description}</p>
                                            <p className="fw-bold">{product.price}</p>
                                            <small className="text-muted">
                                                {product.warehouse}
                                                <br />
                                                {product.distance}
                                            </small>
                                        </div>
                                        <div className="card-footer bg-white">
                                            <button
                                                className={`btn w-100 ${inCart ? "btn-danger" : "btn-primary"}`}
                                                onClick={() => toggleCart(product)}
                                            >
                                                {inCart ? "Remove from Cart" : "Add to Cart"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ProductCatalog;
