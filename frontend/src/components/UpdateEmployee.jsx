import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService.jsx";
import "./UpdateEmployee.css";

function UpdateEmployee() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [doj, setDoj] = useState("");
  const [department, setDepartment] = useState({
    deptName: "",
    designation: "",
  });

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setName(res.data.name);
      setDoj(res.data.doj);

      setDepartment({
        deptName: res.data.dept.deptName,
        designation: res.data.dept.designation,
      });
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updateEmployee = {
      name,
      doj,
      dept: {
        deptName: department.deptName,
        designation: department.designation,
      },
    };

    EmployeeService.updateEmployee(id, updateEmployee).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="update-page">

      {/* Background */}
      <div className="update-grid"></div>

      <div className="update-bg-circle update-circle-one"></div>
      <div className="update-bg-circle update-circle-two"></div>

      <div className="update-container">

        {/* Brand */}
        <div className="update-brand">
          <div className="update-brand-logo">JBN</div>

          <div className="update-brand-text">
            <strong>JBN INNOTECH PVT LTD</strong>
            <span>EMPLOYEE MANAGEMENT SYSTEM</span>
          </div>
        </div>

        {/* Card */}
        <div className="update-card">

          {/* Header */}
          <div className="update-header">

            <div className="update-header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>

            <div className="update-header-content">
              <span className="update-header-label">
                EMPLOYEE MANAGEMENT
              </span>

              <h1>Update Employee</h1>

              <p>
                Modify employee information and keep records up to date.
              </p>
            </div>

          </div>

          {/* Form */}
          <div className="update-form">

            {/* Employee Information */}
            <div className="update-section-title">

              <div className="update-section-number">
                01
              </div>

              <div>
                <h2>Employee Information</h2>
                <p>Update the employee details below</p>
              </div>

            </div>

            {/* Employee Name */}
            <div className="update-form-group">

              <label>
                Employee Name <span>*</span>
              </label>

              <div className="update-input-wrapper">

                <div className="update-input-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter employee name"
                />

              </div>

            </div>

            {/* DOJ */}
            <div className="update-form-group">

              <label>
                Date of Joining <span>*</span>
              </label>

              <div className="update-input-wrapper">

                <div className="update-input-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="17"
                      rx="2"
                    />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={doj}
                  onChange={(e) => setDoj(e.target.value)}
                  placeholder="Enter joining date"
                />

              </div>

            </div>

            {/* Department */}
            <div className="update-form-group">

              <label>
                Department <span>*</span>
              </label>

              <div className="update-input-wrapper">

                <div className="update-input-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21v-4h6v4" />
                    <path d="M9 9h1" />
                    <path d="M14 9h1" />
                    <path d="M9 12h1" />
                    <path d="M14 12h1" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={department.deptName}
                  onChange={(e) =>
                    setDepartment({
                      ...department,
                      deptName: e.target.value,
                    })
                  }
                  placeholder="Enter department"
                />

              </div>

            </div>

            {/* Designation */}
            <div className="update-form-group">

              <label>
                Designation <span>*</span>
              </label>

              <div className="update-input-wrapper">

                <div className="update-input-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="13"
                      rx="2"
                    />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 12h18" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={department.designation}
                  onChange={(e) =>
                    setDepartment({
                      ...department,
                      designation: e.target.value,
                    })
                  }
                  placeholder="Enter designation"
                />

              </div>

            </div>

            {/* Divider */}
            <div className="update-divider"></div>

            {/* Footer */}
            <div className="update-footer">

              <div className="update-required-info">
                <span>*</span> Required fields
              </div>

              <div className="update-buttons">

                <button
                  className="update-cancel-btn"
                  onClick={handleCancel}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>

                  Cancel
                </button>

                <button
                  className="update-save-btn"
                  onClick={handleUpdate}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>

                  Update Employee
                </button>

              </div>

            </div>

            {/* Security */}
            <div className="update-security">

              <div className="update-security-check">
                ✓
              </div>

              Secure employee record update

              <div className="update-security-divider"></div>

              JBN INNOTECH PVT LTD

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;