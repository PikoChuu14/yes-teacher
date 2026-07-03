import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/DashboardLayout";
import { classes, initialSessions, students } from "./data/mockData";
import AttendancePage from "./pages/Attendance";
import ClassesPage from "./pages/Classes";
import StudentsPage from "./pages/Students";
import TeachersPage from "./pages/Teachers";

function createInitialAttendance(sessions, classes) {
  const attendance = {};

  sessions.forEach((session) => {
    const classInfo = classes.find((item) => item.id === session.classId);

    attendance[session.id] = {};

    classInfo.studentIds.forEach((studentId) => {
      attendance[session.id][studentId] = "not_submitted";
    });
  });

  return attendance;
}

function App() {
  const [sessions, setSessions] = useState(initialSessions);

  const [attendanceBySession, setAttendanceBySession] = useState(() =>
    createInitialAttendance(initialSessions, classes)
  );

  const handleMarkAttendance = (sessionId, studentId, status) => {
    const session = sessions.find((item) => item.id === sessionId);

    if (!session) {
      return;
    }

    setAttendanceBySession((currentAttendance) => ({
      ...currentAttendance,
      [sessionId]: {
        ...currentAttendance[sessionId],
        [studentId]: status,
      },
    }));
  };

  const handleSubmitAttendance = (sessionId) => {
    const session = sessions.find((item) => item.id === sessionId);

    if (!session) {
      return;
    }

    const classInfo = classes.find((item) => item.id === session.classId);
    const sessionAttendance = attendanceBySession[sessionId];

    const hasUnmarkedStudent = classInfo.studentIds.some(
      (studentId) => sessionAttendance[studentId] === "not_submitted"
    );

    if (hasUnmarkedStudent) {
      alert("Please mark attendance for all students before submitting.");
      return;
    }

    setSessions((currentSessions) =>
      currentSessions.map((item) =>
        item.id === sessionId ? { ...item, status: "submitted" } : item
      )
    );

    if (session.status === "submitted") {
      alert("Attendance updated successfully.");
    } 
    else {
        alert("Attendance submitted successfully.");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/classes" replace />} />

          <Route
            path="classes"
            element={<ClassesPage classes={classes} sessions={sessions} />}
          />

          <Route path="students" element={<StudentsPage />} />

          <Route path="teachers" element={<TeachersPage />} />

          <Route
            path="attendance/:sessionId"
            element={
              <AttendancePage
                classes={classes}
                students={students}
                sessions={sessions}
                attendanceBySession={attendanceBySession}
                onMarkAttendance={handleMarkAttendance}
                onSubmitAttendance={handleSubmitAttendance}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;