function Classes() {
  return (
    <main className="page">
      <section className="content-card">
        <div className="page-header">
          <div>
            <p className="eyebrow">Class Management</p>
            <h2>Classes</h2>
            <p className="page-description">
              View and manage class sessions for the tuition centre.
            </p>
          </div>

          <button className="primary-button">Add Class</button>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <p>Total Classes</p>
            <h3>3</h3>
          </div>

          <div className="summary-card">
            <p>Today Sessions</p>
            <h3>2</h3>
          </div>

          <div className="summary-card">
            <p>Pending Attendance</p>
            <h3>2</h3>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Schedule</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Form 3 Mathematics</td>
                <td>Mathematics</td>
                <td>Teacher A</td>
                <td>Mon, 8:00 PM</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>Year 6 English</td>
                <td>English</td>
                <td>Teacher B</td>
                <td>Wed, 5:00 PM</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>Form 4 Science</td>
                <td>Science</td>
                <td>Teacher C</td>
                <td>Fri, 7:30 PM</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Classes;