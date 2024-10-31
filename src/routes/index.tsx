import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import { ForgetPw } from "../pages/auth/forgetpw";
import { Verification } from "../pages/auth/verification";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "../pages/dashboard";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import { Pelatihanku } from "../pages/pelatihanku";
import { Penugasan } from "../pages/penugasan";
import { Bootcamp } from "../pages/bootcamp";
import { AllFeatures } from "../pages/allFeatures";
import { Modul } from "../pages/pelatihanku/modul";

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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bootcamp"
            element={
              <ProtectedRoute>
                <Bootcamp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/allFeatures"
            element={
              <ProtectedRoute>
                <AllFeatures />
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
            path="/pelatihanku/:pelatihankuId"
            element={
              <ProtectedRoute>
                <PelatihankuDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modul/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Modul />
              </ProtectedRoute>
            }
          />
          <Route
            path="/penugasan"
            element={
              <ProtectedRoute>
                <Penugasan />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
