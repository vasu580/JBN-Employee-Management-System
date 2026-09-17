import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import "./CreateEmployee.css";

function CreateEmployee() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState({
    name: "",
    doj: "",
    dept: {
      deptName: "",
      designation: "",
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "doj") {
      setEmployees((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setEmployees((prev) => ({
        ...prev,
        dept: {
          ...prev.dept,
          [name]: value,
        },
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const err = {};
    let ok = true;

    if (!employees.name.trim()) {
      err.name = "Name required";
      ok = false;
    }

    if (!employees.doj) {
      err.doj = "DOJ required";
      ok = false;
    }

    if (!employees.dept.deptName.trim()) {
      err.deptName = "Department required";
      ok = false;
    }

    if (!employees.dept.designation.trim()) {
      err.designation = "Designation required";
      ok = false;
    }

    setErrors(err);
    return ok;
  };

  const formatDate = (date) => {
    const d = new Date(date);

    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    EmployeeService.addEmployee({
      ...employees,
      doj: formatDate(employees.doj),
    }).then(() => navigate("/"));
  };

  return (
    <div className="create-page">

      {/* Background */}
      <div className="create-bg-circle create-circle-one"></div>
      <div className="create-bg-circle create-circle-two"></div>
      <div className="create-grid"></div>

      <div className="create-container">

        {/* =========================
            TOP BRAND
        ========================= */}


        {/* =========================
            MAIN CARD
        ========================= */}

        <div className="create-card">

          {/* HEADER */}

          <div className="create-header">

            <div className="create-header-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="9" cy="7" r="4" />

                <path d="M3 21v-2a6 6 0 0 1 12 0v2" />

                <path d="M19 8v6" />
                <path d="M16 11h6" />
              </svg>

            </div>

            <div className="create-header-content">

              <span className="create-header-label">
                EMPLOYEE MANAGEMENT
              </span>

              <h1>
                Create Employee
              </h1>

              <p>
                Add a new employee to your organization
              </p>

            </div>

          </div>


          {/* FORM */}

          <form
            className="create-form"
            onSubmit={handleSubmit}
          >

            {/* FORM SECTION */}

            <div className="form-section">

              <div className="form-section-title">

                <span className="section-number">
                  01
                </span>

                <div>
                  <h2>Personal Information</h2>

                  <p>
                    Enter the employee's basic details
                  </p>
                </div>

              </div>


              {/* NAME */}

              <div
                className={`form-group ${
                  errors.name ? "has-error" : ""
                }`}
              >

                <label>
                  Employee Name
                  <span>*</span>
                </label>

                <div className="input-wrapper">

                  <div className="input-icon">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>

                  </div>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter employee full name"
                    value={employees.name}
                    onChange={handleChange}
                  />

                </div>

                {errors.name && (
                  <div className="field-error">
                    <span>!</span>
                    {errors.name}
                  </div>
                )}

              </div>


              {/* DOJ */}

              <div
                className={`form-group ${
                  errors.doj ? "has-error" : ""
                }`}
              >

                <label>
                  Date of Joining
                  <span>*</span>
                </label>

                <div className="input-wrapper">

                  <div className="input-icon">

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
                        height="17"
                        rx="2"
                      />

                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>

                  </div>

                  <input
                    type="date"
                    name="doj"
                    value={employees.doj}
                    onChange={handleChange}
                  />

                </div>

                {errors.doj && (
                  <div className="field-error">
                    <span>!</span>
                    {errors.doj}
                  </div>
                )}

              </div>

            </div>


            {/* DIVIDER */}

            <div className="form-divider"></div>


            {/* ORGANIZATION */}

            <div className="form-section">

              <div className="form-section-title">

                <span className="section-number">
                  02
                </span>

                <div>

                  <h2>Organization Details</h2>

                  <p>
                    Assign department and designation
                  </p>

                </div>

              </div>


              {/* DEPARTMENT */}

              <div
                className={`form-group ${
                  errors.deptName ? "has-error" : ""
                }`}
              >

                <label>
                  Department
                  <span>*</span>
                </label>

                <div className="input-wrapper">

                  <div className="input-icon">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                      />

                      <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                      />

                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                      />

                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                      />
                    </svg>

                  </div>

                  <input
                    type="text"
                    name="deptName"
                    placeholder="e.g. Engineering, HR, Finance"
                    value={employees.dept.deptName}
                    onChange={handleChange}
                  />

                </div>

                {errors.deptName && (
                  <div className="field-error">
                    <span>!</span>
                    {errors.deptName}
                  </div>
                )}

              </div>


              {/* DESIGNATION */}

              <div
                className={`form-group ${
                  errors.designation
                    ? "has-error"
                    : ""
                }`}
              >

                <label>
                  Designation
                  <span>*</span>
                </label>

                <div className="input-wrapper">

                  <div className="input-icon">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="15"
                        rx="2"
                      />

                      <path d="M8 5V3h8v2" />

                      <path d="M8 12h8M12 9v6" />
                    </svg>

                  </div>

                  <input
                    type="text"
                    name="designation"
                    placeholder="e.g. Software Engineer"
                    value={employees.dept.designation}
                    onChange={handleChange}
                  />

                </div>

                {errors.designation && (
                  <div className="field-error">
                    <span>!</span>
                    {errors.designation}
                  </div>
                )}

              </div>

            </div>


            {/* FORM FOOTER */}

            <div className="create-footer">

              <div className="required-info">
                <span>*</span>
                Required fields
              </div>

              <div className="create-buttons">

                <button
                  type="button"
                  className="cancel-create-btn"
                  onClick={() => navigate("/")}
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>

                  Cancel

                </button>


                <button
                  type="submit"
                  className="save-create-btn"
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />

                    <path d="M17 21v-8H7v8" />

                    <path d="M7 3v5h8" />
                  </svg>

                  Create Employee

                </button>

              </div>

            </div>

          </form>

        </div>


        {/* SECURITY */}

        <div className="create-security">

          <span className="security-check">
            ✓
          </span>

          <span>
            Your employee information is securely managed
          </span>

          <span className="security-divider">
            •
          </span>

          <span>
            JBN INNOTECH PVT LTD
          </span>

        </div>

      </div>

    </div>
  );
}

export default CreateEmployee;