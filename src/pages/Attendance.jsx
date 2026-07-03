import { Link, useParams } from "react-router-dom";

function AttendancePage({
  classes,
  students,
  sessions,
  attendanceBySession,
  onMarkAttendance,
  onSubmitAttendance,
}) {
  const { sessionId } = useParams();

  const session = sessions.find((item) => item.id === sessionId);

  if (!session) {
    return (
      <main className="page">
        <section className="content-card">
          <h2>Session not found</h2>
          <Link to="/classes">Back to classes</Link>
        </section>
      </main>
    );
  }

  const classInfo = classes.find((item) => item.id === session.classId);

  const classStudents = students.filter((student) =>
    classInfo.studentIds.includes(student.id)
  );

  const sessionAttendance = attendanceBySession[session.id] || {};

  const getStatusLabel = (status) => {
    if (status === "attend") return "Attend";
    if (status === "late") return "Late";
    if (status === "absent") return "Absent";
    return "Not Submitted";
  };

  return (
    <main className="page">
      <section className="content-card">
        <Link className="back-link" to="/classes">
          ← Back to classes
        </Link>

        <div className="page-header">
          <div>
            <p className="eyebrow">Attendance</p>
            <h2>{classInfo.name}</h2>
            <p className="page-description">
              {session.sessionDate} • {session.startTime} - {session.endTime} •{" "}
              {session.room}
            </p>
          </div>

          <span
            className={
              session.status === "submitted"
                ? "status-pill submitted"
                : "status-pill pending"
            }
          >
            {session.status === "submitted" ? "Submitted" : "Not Submitted"}
          </span>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Current Status</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>

            <tbody>
              {classStudents.map((student) => {
                const currentStatus =
                  sessionAttendance[student.id] || "not_submitted";

                return (
                  <tr key={student.id}>
                    <td>
                      <strong>{student.name}</strong>
                      <p className="table-subtext">{student.level}</p>
                    </td>

                    <td>{getStatusLabel(currentStatus)}</td>

                    <td>
                      <div className="attendance-actions">
                        <button
                          className={
                            currentStatus === "attend"
                              ? "attendance-button selected"
                              : "attendance-button"
                          }
                          onClick={() =>
                            onMarkAttendance(session.id, student.id, "attend")
                          }
                        >
                          Attend
                        </button>

                        <button
                          className={
                            currentStatus === "late"
                              ? "attendance-button selected"
                              : "attendance-button"
                          }
                          onClick={() =>
                            onMarkAttendance(session.id, student.id, "late")
                          }
                        >
                          Late
                        </button>

                        <button
                          className={
                            currentStatus === "absent"
                              ? "attendance-button selected absent"
                              : "attendance-button"
                          }
                          onClick={() =>
                            onMarkAttendance(session.id, student.id, "absent")
                          }
                        >
                          Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="submit-row">
          <button
            className="primary-button"
            onClick={() => onSubmitAttendance(session.id)}
          >
            {session.status === "submitted"
              ? "Update Attendance"
              : "Submit Attendance"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default AttendancePage;