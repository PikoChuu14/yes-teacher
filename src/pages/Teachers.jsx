function Teachers() {
  return (
    <main className="page">
      <section className="content-card">
        <div className="page-header">
          <div>
            <p className="eyebrow">Teacher Management</p>
            <h2>Teachers</h2>
            <p className="page-description">
              Manage teachers who can mark attendance for class sessions.
            </p>
          </div>

          <button className="primary-button">Add Teacher</button>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <p>Total Teachers</p>
            <h3>3</h3>
          </div>

          <div className="summary-card">
            <p>Active Teachers</p>
            <h3>3</h3>
          </div>

          <div className="summary-card">
            <p>Subjects Covered</p>
            <h3>3</h3>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Teacher ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>TCH-001</td>
                <td>Teacher A</td>
                <td>Mathematics</td>
                <td>011-1111111</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>TCH-002</td>
                <td>Teacher B</td>
                <td>English</td>
                <td>011-2222222</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>TCH-003</td>
                <td>Teacher C</td>
                <td>Science</td>
                <td>011-3333333</td>
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

export default Teachers;