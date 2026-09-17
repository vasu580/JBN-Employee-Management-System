import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import "./EmployeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [value] = useTypewriter({
    words: ["Details", "Information", "List"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 120,
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    EmployeeService.deleteEmployee(id)
      .then(() => {
        loadEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ============================
  // SEARCH
  // ============================

  const filteredEmployees = employees.filter((emp) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    const id = String(emp.id || "").toLowerCase();
    const name = String(emp.name || "").toLowerCase();
    const department = String(
      emp.dept?.deptName || ""
    ).toLowerCase();

    const designation = String(
      emp.dept?.designation || ""
    ).toLowerCase();

    const doj = String(emp.doj || "").toLowerCase();

    return (
      id.includes(search) ||
      name.includes(search) ||
      department.includes(search) ||
      designation.includes(search) ||
      doj.includes(search)
    );
  });

  // ============================
  // CLEAR SEARCH
  // ============================

  const clearSearch = () => {
    setSearchTerm("");
  };

  // ============================
  // ESC KEY
  // ============================

  const handleSearchKeyDown = (e) => {
    if (e.key === "Escape") {
      clearSearch();
    }
  };

  return (
    <div className="employee-page">

      {/* Background */}
      <div className="dashboard-circle circle-one"></div>
      <div className="dashboard-circle circle-two"></div>

      <div className="dashboard-container">

        {/* ============================
            HEADER
        ============================ */}

        <div className="dashboard-header">

          <div className="header-left">

            <div className="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <div>

              <div className="header-label">
                JBN INNOTECH PVT LTD
              </div>

              <h1>
                Employee{" "}
                <span>{value}</span>
                <Cursor cursorStyle="|" />
              </h1>

              <p>
                Employee Management System Dashboard
              </p>

            </div>

          </div>

          <div className="header-badge">
            <span className="online-dot"></span>
            Management Portal
          </div>

        </div>


        {/* ============================
            STATISTICS
        ============================ */}

        <div className="stats-row">

          {/* Total Employees */}
          <div className="stat-card">

            <div className="stat-icon blue">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <div className="stat-content">
              <span>Total Employees</span>
              <strong>{employees.length}</strong>
            </div>

          </div>


          {/* System Status */}
          <div className="stat-card">

            <div className="stat-icon green">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <div className="stat-content">
              <span>System Status</span>
              <strong className="active-text">
                Active
              </strong>
            </div>

          </div>


          {/* Records */}
          <div className="stat-card">

            <div className="stat-icon purple">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                />

                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                />

                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                />

                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                />
              </svg>

            </div>

            <div className="stat-content">
              <span>Employee Records</span>
              <strong>{employees.length}</strong>
            </div>

          </div>

        </div>


        {/* ============================
            TOOLBAR
        ============================ */}

        <div className="toolbar">

          <div className="toolbar-title">

            <div className="records-title-row">

              <h2>Employee Records</h2>

              {searchTerm && (
                <span className="search-active-badge">
                  Search Active
                </span>
              )}

            </div>

            <p>
              View and manage employee information
            </p>

          </div>


          {/* ============================
              SEARCH BOX
          ============================ */}

          <div className="search-section">

            <div className="search-box-wrapper">

              <div
                className={`premium-search ${
                  searchTerm ? "search-has-value" : ""
                }`}
              >

                <div className="search-icon-container">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                    />

                    <line
                      x1="16.65"
                      y1="16.65"
                      x2="21"
                      y2="21"
                    />
                  </svg>

                </div>


                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search employees..."
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  onKeyDown={handleSearchKeyDown}
                />


                {!searchTerm && (
                  <span className="search-shortcut">
                    Ctrl K
                  </span>
                )}


                {searchTerm && (
                  <button
                    className="search-clear"
                    onClick={clearSearch}
                    title="Clear search"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                      />

                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                      />
                    </svg>

                  </button>
                )}

              </div>


              <div className="search-info">

                {searchTerm ? (
                  <>
                    <strong>
                      {filteredEmployees.length}
                    </strong>{" "}
                    result
                    {filteredEmployees.length !== 1
                      ? "s"
                      : ""}{" "}
                    found
                  </>
                ) : (
                  "Search by name, ID, department or designation"
                )}

              </div>

            </div>

          </div>


          {/* ADD EMPLOYEE */}

          <Link
            to="/add-emp"
            className="add-button"
          >
            <span className="plus-icon">
              +
            </span>

            Add Employee
          </Link>

        </div>


        {/* ============================
            TABLE
        ============================ */}

        <div className="table-card">

          <div className="table-responsive">

            <table>

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Employee Name</th>

                  <th>Date of Joining</th>

                  <th>Department</th>

                  <th>Designation</th>

                  <th className="action-heading">
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredEmployees.length > 0 ? (

                  filteredEmployees.map((emp) => (

                    <tr
                      key={emp.id}
                      className="employee-row"
                    >

                      {/* ID */}

                      <td>

                        <div className="employee-id">
                          {String(emp.id).padStart(2, "0")}
                        </div>

                      </td>


                      {/* NAME */}

                      <td>

                        <div className="employee-name">

                          <div className="avatar">
                            {emp.name
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>

                          <div>

                            <strong>
                              {emp.name}
                            </strong>

                            <small>
                              Employee
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* DATE */}

                      <td>

                        <div className="date-box">

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >

                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                            />

                            <line
                              x1="16"
                              y1="2"
                              x2="16"
                              y2="6"
                            />

                            <line
                              x1="8"
                              y1="2"
                              x2="8"
                              y2="6"
                            />

                            <line
                              x1="3"
                              y1="10"
                              x2="21"
                              y2="10"
                            />

                          </svg>

                          <span>
                            {emp.doj}
                          </span>

                        </div>

                      </td>


                      {/* DEPARTMENT */}

                      <td>

                        <span className="department-badge">
                          {emp.dept?.deptName}
                        </span>

                      </td>


                      {/* DESIGNATION */}

                      <td>

                        <span className="designation-text">
                          {emp.dept?.designation}
                        </span>

                      </td>


                      {/* ACTIONS */}

                      <td>

                        <div className="action-buttons">

                          <Link
                            to={`/update-emp/${emp.id}`}
                            className="update-button"
                            title="Update Employee"
                          >

                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >

                              <path d="M12 20h9" />

                              <path
                                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
                              />

                            </svg>

                            Update

                          </Link>


                          <button
                            className="delete-button"
                            title="Delete Employee"
                            onClick={() =>
                              deleteEmployee(emp.id)
                            }
                          >

                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >

                              <polyline
                                points="3 6 5 6 21 6"
                              />

                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
                              />

                              <path
                                d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              />

                              <line
                                x1="10"
                                y1="11"
                                x2="10"
                                y2="17"
                              />

                              <line
                                x1="14"
                                y1="11"
                                x2="14"
                                y2="17"
                              />

                            </svg>

                            Delete

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="empty-cell"
                    >

                      <div className="empty-state">

                        <div className="empty-icon">

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >

                            <circle
                              cx="11"
                              cy="11"
                              r="7"
                            />

                            <line
                              x1="16.65"
                              y1="16.65"
                              x2="21"
                              y2="21"
                            />

                          </svg>

                        </div>

                        <h3>
                          No Employees Found
                        </h3>

                        <p>
                          No employee matches{" "}
                          <strong>
                            "{searchTerm}"
                          </strong>
                          . Try another search.
                        </p>

                        <button
                          className="empty-add-button"
                          onClick={clearSearch}
                        >
                          Clear Search
                        </button>

                      </div>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>


          {/* ============================
              FOOTER
          ============================ */}

          {employees.length > 0 && (

            <div className="table-footer">

              <span>

                Showing{" "}

                <strong>
                  {filteredEmployees.length}
                </strong>

                {" "}of{" "}

                <strong>
                  {employees.length}
                </strong>

                {" "}employee
                {employees.length !== 1
                  ? "s"
                  : ""}

              </span>


              <span className="footer-status">

                <span></span>

                All records loaded

              </span>

            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default EmployeeList;
