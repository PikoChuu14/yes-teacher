import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import ClassesPage from "./pages/Classes";
import StudentsPage from "./pages/Students";
import TeachersPage from "./pages/Teachers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/classes" replace />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="teachers" element={<TeachersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;