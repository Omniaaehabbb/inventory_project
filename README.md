# inventory_project
# Warezo
*A B2B web platform connecting warehouses with retail stores.*

## 📖 Description
Warezo simplifies stock ordering for retail stores. Shops can log in, browse products from nearby warehouses, place orders, and track deliveries. The platform focuses on simplicity, speed, and local market support (Arabic RTL + English).

---

## 🚀 Features
- 🔑 Authentication
  - Secure signup/login (password or OTP)
  - Role-based access (shop owner, company admin, warehouse manager)
- 🗺️ Warehouse Selection
  - Auto-select nearest warehouse
  - Manual selection by city/province
- 🛒 Product Catalog
  - Categories, filters, search with autocomplete
  - Stock status per selected warehouse
- 📦 Product Details
  - SKU, specs, barcode, multi-images
  - Add to cart with quantity & validation
- 🧺 Cart & Checkout
  - Update quantities, taxes/shipping preview
  - Payment options: Cash on Delivery, Mobile Wallets, Cards
- 🚚 Order Tracking
  - Status timeline (pending → confirmed → shipped → delivered)
  - Real-time notifications (in-app/email/SMS)
- 🗂️ Store Dashboard
  - Order history, invoice download (PDF/CSV)
  - One-click reorder
- 🏭 Warehouse/Company Dashboard
  - Manage products & stock per warehouse
  - Accept/adjust orders, update statuses
- 🛡️ Admin (Super Admin)
  - Approve/reject companies
  - Platform-wide analytics & commissions
- 🔔 Notifications Center
  - Read/unread states, real-time updates
- 📊 Analytics (Future)
  - Low-stock alerts, sales insights, AI predictions
- 🌐 Internationalization
  - Full Arabic RTL + English
- 📱 General Front-End
  - Mobile-first responsive UI, skeleton loaders, error states

---

## 🧭 Main Pages
- Landing Page  
- Login / Signup  
- Store Dashboard  
- Product Catalog  
- Product Details  
- Cart & Checkout  
- Order Tracking  
- Company/Warehouse Dashboard  
- Admin (Super Admin)

---

## 🛠️ Tech Stack (example)
- Frontend: React (Vite) / Vue, TypeScript, TailwindCSS
- State: Redux Toolkit / Zustand / Pinia
- Routing: React Router / Vue Router
- Backend (future): Node.js + Express / NestJS
- DB (future): MongoDB / PostgreSQL
- Design: Visily (UI mockups)
- Testing: Jest + React Testing Library / Vitest, Playwright/Cypress
- Build/CI: Vite, ESLint/Prettier, GitHub Actions

---

## 📌 Roadmap / Future Improvements
- PWA + Offline mode (queue orders while offline)
- Advanced payments (local mobile wallets, installments)
- Multi-vendor cart split (per company)
- Delivery partner tracking integration
- Ratings & reviews for companies
- EDI/Bulk order CSV with validator & error report

---

## ▶️ Getting Started (Frontend placeholder)
```bash
# clone
git clone https://github.com/<your-username>/warezo.git
cd warezo

# create with Vite (if starting fresh)
npm create vite@latest . -- --template react-ts
npm install

# run dev
npm run dev