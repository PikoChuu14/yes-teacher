import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Class", path: "/classes" },
  { label: "Student", path: "/students" },
  { label: "Teacher", path: "/teachers" },
];

function DashboardLayout() {
  const location = useLocation();

  const activeIndex = navItems.findIndex((item) =>
    location.pathname.startsWith(item.path)
  );

  const indicatorIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <div className="dashboard-shell">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Yes Teacher</h1>

        <div className="header-actions">
          <button className="icon-button" aria-label="Change language">
            🌐
          </button>

          <button className="logout-button">Log out</button>
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <div
            className="sidebar-active-indicator"
            style={{
              transform: `translateY(${indicatorIndex * 56}px)`,
            }}
          />

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active-sidebar-link" : "sidebar-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </aside>

        <section className="dashboard-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default DashboardLayout;