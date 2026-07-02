function Students() {
  return (
    <main className="page">
      <section className="content-card">
        <div className="page-header">
          <div>
            <p className="eyebrow">Student Management</p>
            <h2>Students</h2>
            <p className="page-description">
              View students registered in the tuition centre.
            </p>
          </div>

          <button className="primary-button">Add Student</button>
        </div>

        <div className="summary-grid">
          <div className="summary-card">
            <p>Total Students</p>
            <h3>6</h3>
          </div>

          <div className="summary-card">
            <p>Active Students</p>
            <h3>6</h3>
          </div>

          <div className="summary-card">
            <p>Inactive Students</p>
            <h3>0</h3>
          </div>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Level</th>
                <th>Parent Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>STU-001</td>
                <td>Ali bin Ahmad</td>
                <td>Form 3</td>
                <td>012-3456789</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>STU-002</td>
                <td>Siti Nurhaliza</td>
                <td>Year 6</td>
                <td>013-4567890</td>
                <td>
                  <span className="status-pill active">Active</span>
                </td>
              </tr>

              <tr>
                <td>STU-003</td>
                <td>Kumar Raj</td>
                <td>Form 4</td>
                <td>014-5678901</td>
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

export default Students;