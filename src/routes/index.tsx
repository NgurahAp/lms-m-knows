import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Pelatihanku from "../pages/Pelatihanku";
import ProductList from "../pages/products";
import ProductDetail from "../pages/products/ProductDetail";
import { Login } from "../pages/auth/login";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pelatihanku" element={<Pelatihanku />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
