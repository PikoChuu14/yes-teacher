import { Link } from "react-router-dom";

function ClassesPage({ classes, sessions }) {
  const pendingSessions = sessions.filter(
    (session) => session.status === "not_submitted"
  );

  return (
    <main className="page">
      <section className="content-card">
        <div className="page-header">
          <div>
            <p className="eyebrow">Class Management</p>
            <h2>Classes</h2>
            <p className="page-description">
              Select a scheduled class session to mark attendance.
            </p>
          </div>

          <button className="primary-button">Add Class</button>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <p>Total Classes</p>
            <h3>{classes.length}</h3>
          </div>

          <div className="summary-card">
            <p>Total Sessions</p>
            <h3>{sessions.length}</h3>
          </div>

          <div className="summary-card">
            <p>Pending Attendance</p>
            <h3>{pendingSessions.length}</h3>
          </div>
        </div>

        <div className="section-title-row">
          <h3>Scheduled Sessions</h3>
          <p>Open a session to mark attendance.</p>
        </div>

        <div className="session-grid">
          {sessions.map((session) => {
            const classInfo = classes.find((item) => item.id === session.classId);

            return (
              <article className="session-card" key={session.id}>
                <div>
                  <h3>{classInfo?.name}</h3>

                  <p>
                    {session.sessionDate} • {session.startTime} -{" "}
                    {session.endTime}
                  </p>

                  <p>
                    {session.room} • {classInfo?.teacher}
                  </p>
                </div>

                <div className="session-card-actions">
                  <span
                    className={
                      session.status === "submitted"
                        ? "status-pill submitted"
                        : "status-pill pending"
                    }
                  >
                    {session.status === "submitted"
                      ? "Submitted"
                      : "Not Submitted"}
                  </span>

                  <Link
                    className="secondary-button"
                    to={`/attendance/${session.id}`}
                  >
                    Open Attendance
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ClassesPage;