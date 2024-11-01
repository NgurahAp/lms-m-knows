import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AllFeatures } from "../pages/allFeatures";
import { Bootcamp } from "../pages/bootcamp";
import Dashboard from "../pages/dashboard";
import Home from "../pages/Home";
import { Pelatihanku } from "../pages/pelatihanku";
import { Modul } from "../pages/pelatihanku/modul";
import { DetailModule } from "../pages/pelatihanku/modul/DetailModul";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import Penugasan from "../pages/penugasan";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import { Login } from "../pages/auth/login";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
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
            path="/detailModul/:subjectId/:sessionId/:moduleId"
            element={
              <ProtectedRoute>
                <DetailModule />
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
