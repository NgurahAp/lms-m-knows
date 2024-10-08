import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Pelatihanku from "../pages/Pelatihanku";
import ProductList from "../pages/products";
import ProductDetail from "../pages/products/ProductDetail";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { ForgetPw } from "../pages/auth/forgetpw";
import { Verification } from "../pages/auth/verification";


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpw" element={<ForgetPw />} />
          <Route path="/verification" element={<Verification />} />

          <Route path="/pelatihanku" element={<Pelatihanku />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
