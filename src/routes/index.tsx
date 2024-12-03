import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AllFeatures } from "../pages/allFeatures";
import { Bootcamp } from "../pages/bootcamp";
import Dashboard from "../pages/dashboard";
import Home from "../pages/Home";
import { Pelatihanku } from "../pages/pelatihanku";
import { Module } from "../pages/pelatihanku/module";
import { DetailModule } from "../pages/pelatihanku/module/DetailModule";
import { PelatihankuDetail } from "../pages/pelatihanku/pelatihankuDetail";
import Penugasan from "../pages/penugasan";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import { Login } from "../pages/auth/login";
import { Quiz } from "../pages/pelatihanku/quiz";
import { DetailQuiz } from "../pages/pelatihanku/quiz/DetailQuiz";
import { QuizAttempt } from "../pages/pelatihanku/quiz/QuizAttempt";
import { Assignment } from "../pages/pelatihanku/assignments";
import { DetailAssignment } from "../pages/pelatihanku/assignments/DetailAssignment";
import { Reflection } from "../pages/pelatihanku/reflection";
import { SubmitReflection } from "../pages/pelatihanku/reflection/SubmitReflection";
import { HistoryReflection } from "../pages/pelatihanku/reflection/HistoryReflection";
import { Assesment } from "../pages/pelatihanku/assesment";
import { AttemptAssesment } from "../pages/pelatihanku/assesment/AttemptAssesment";
import { Discussion } from "../pages/pelatihanku/discussion";
import { Score } from "../pages/score";
import { DetailScore } from "../pages/score/DetailScore";
import { RoleplayAsses } from "../pages/roleplay-asses";
import { PilihRoleplay } from "../pages/roleplay-asses/pilih-roleplay";
import { DaftarRoleplay } from "../pages/roleplay-asses/daftar-roleplay";
import { KonfirRoleplay } from "../pages/roleplay-asses/konfir-roleplay";
import { NilaiRoleplay } from "../pages/roleplay-asses/nilai-roleplay";
import { SubmitRoleplay } from "../pages/roleplay-asses/submit-roleplay";
import { PilihAses } from "../pages/roleplay-asses/pilih-ases";
import { KonfirAses } from "../pages/roleplay-asses/konfir-ases";
import { NilaiAses } from "../pages/roleplay-asses/nilai-ases";

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
            path="/penugasan"
            element={
              <ProtectedRoute>
                <Penugasan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/module/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Module />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailModule/:subjectId/:sessionId/:moduleId"
            element={
              <ProtectedRoute>
                <DetailModule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailQuiz/:subjectId/:sessionId/:quizId"
            element={
              <ProtectedRoute>
                <DetailQuiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizAttempt/:subjectId/:sessionId/:quizId"
            element={
              <ProtectedRoute>
                <QuizAttempt />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assignment/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Assignment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailAssignment/:subjectId/:sessionId/:assignmentId"
            element={
              <ProtectedRoute>
                <DetailAssignment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reflection/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Reflection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submitReflection/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <SubmitReflection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/historyReflection/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <HistoryReflection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assesment/:subjectId/:sessionId/:subjectName"
            element={
              <ProtectedRoute>
                <Assesment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attemptAssesment/:subjectId/:sessionId/:subjectName"
            element={
              <ProtectedRoute>
                <AttemptAssesment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/discussion/:subjectId/:sessionId"
            element={
              <ProtectedRoute>
                <Discussion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/score"
            element={
              <ProtectedRoute>
                <Score />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailScore/:subjectId"
            element={
              <ProtectedRoute>
                <DetailScore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roleplay-asses"
            element={
              <ProtectedRoute>
                <RoleplayAsses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pilih-roleplay"
            element={
              <ProtectedRoute>
                <PilihRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daftar-roleplay"
            element={
              <ProtectedRoute>
                <DaftarRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/konfir-roleplay"
            element={
              <ProtectedRoute>
                <KonfirRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nilai-roleplay"
            element={
              <ProtectedRoute>
                <NilaiRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submit-roleplay"
            element={
              <ProtectedRoute>
                <SubmitRoleplay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pilih-ases"
            element={
              <ProtectedRoute>
                <PilihAses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/konfir-ases"
            element={
              <ProtectedRoute>
                <KonfirAses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nilai-ases"
            element={
              <ProtectedRoute>
                <NilaiAses />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/pelatihan-keterampilan"
            element={
              <ProtectedRoute>
                <PelatihanKet />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/roleplay-asses"
            element={
              <ProtectedRoute>
                <RoleplayAsses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pilih-roleplay"
            element={
              <ProtectedRoute>
                <PilihRoleplay />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/pilih-ases"
            element={
              <ProtectedRoute>
                <PilihAses />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
