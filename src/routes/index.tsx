import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductList from "../pages/products";
import ProductDetail from "../pages/products/ProductDetail";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { ForgetPw } from "../pages/auth/forgetpw";
import { Verification } from "../pages/auth/verification";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "../pages/dashboard";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import { Pelatihanku } from "../pages/pelatihanku";

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
          <Route path="/pelatihankuDetail" element={<PelatihankuDetail />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pelatihanku"
            element={
              <ProtectedRoute>
                <Pelatihanku />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
