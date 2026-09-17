import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [eyeAnimating, setEyeAnimating] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setEyeAnimating(true);
    setShowPassword((prev) => !prev);

    setTimeout(() => {
      setEyeAnimating(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    AuthService.login(user)
      .then((res) => {
        if (res.data === true) {
          localStorage.setItem("logged", "true");
          navigate("/");
        } else {
          setError("Invalid Username or Password");
        }
      })
      .catch(() => {
        setError("Invalid Username or Password");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="jbn-login-page">

      {/* ================= BACKGROUND ================= */}

      <div className="animated-background">
        <div className="gradient-orb orb-one"></div>
        <div className="gradient-orb orb-two"></div>
        <div className="gradient-orb orb-three"></div>

        <div className="grid-background"></div>

        <div className="floating-particle particle-one"></div>
        <div className="floating-particle particle-two"></div>
        <div className="floating-particle particle-three"></div>
        <div className="floating-particle particle-four"></div>
        <div className="floating-particle particle-five"></div>
      </div>

      {/* ================= LOGIN WRAPPER ================= */}

      <div className="login-wrapper">

        {/* ================= BRAND PANEL ================= */}

        <div className="brand-panel">

          <div className="brand-content">

            <div className="brand-logo">
              <span className="logo-letter">J</span>
              <span className="logo-letter">B</span>
              <span className="logo-letter">N</span>

              <div className="logo-ring"></div>
            </div>

            <h1>
              JBN
              <span> Innotech</span>
            </h1>

            <div className="technology-text">
              PVT LTD
            </div>

            <div className="brand-line"></div>

            <p>
              Empowering businesses through
              <br />
              innovative technology solutions.
            </p>

            <div className="brand-features">

              <div className="feature">
                <span>✦</span>
                Smart Solutions
              </div>

              <div className="feature">
                <span>✦</span>
                Modern Technology
              </div>

              <div className="feature">
                <span>✦</span>
                Secure Platform
              </div>

            </div>

          </div>

        </div>

        {/* ================= LOGIN SECTION ================= */}

        <div className="login-section">

          <div className="login-card">

            <div className="card-glow"></div>

            {/* MOBILE BRAND */}

            <div className="mobile-brand">

              <div className="mobile-logo">
                JBN
              </div>

              <div>
                <strong>JBN Innotech</strong>
                <small>PVT LTD</small>
              </div>

            </div>

            {/* HEADER */}

            <div className="login-header">

              <div className="welcome-badge">
                <span></span>
                Employee Portal
              </div>

              <h2>
                Welcome <span>Back!</span>
              </h2>

              <p>
                Sign in to access your employee dashboard
              </p>

            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>

              {/* USERNAME */}

              <div className="field">

                <div className="field-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M4 21c0-4 3.5-6 8-6s8 2 8 6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <input
                  type="text"
                  placeholder=" "
                  autoComplete="off"
                  value={user.username}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      username: e.target.value,
                    })
                  }
                />

                <label>Username</label>

                <div className="field-line"></div>

              </div>

              {/* PASSWORD */}

              <div className="field">

                <div className="field-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="4"
                      y="10"
                      width="16"
                      height="11"
                      rx="2"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M8 10V7a4 4 0 018 0v3"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" "
                  value={user.password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />

                <label>Password</label>

                <button
                  type="button"
                  className={`password-eye ${
                    eyeAnimating ? "eye-blink" : ""
                  }`}
                  onClick={togglePassword}
                >

                  {showPassword ? (

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >

                      <path
                        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                        strokeWidth="1.8"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        strokeWidth="1.8"
                      />

                    </svg>

                  ) : (

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >

                      <path
                        d="M3 3l18 18"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M10.6 10.6a2 2 0 002.8 2.8"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M6.1 6.1C3.5 8 2 12 2 12s3.5 7 10 7c1.6 0 3-.3 4.3-.9"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                    </svg>

                  )}

                </button>

                <div className="field-line"></div>

              </div>

              {/* ERROR */}

              {error && (
                <div className="error-box">

                  <div className="error-icon">
                    !
                  </div>

                  <span>{error}</span>

                </div>
              )}

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className={`submit-button ${
                  loading ? "button-loading" : ""
                }`}
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="loader"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>Sign In</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      <path
                        d="m13 6 6 6-6 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}

              </button>

            </form>

            {/* SECURITY */}

            <div className="security-section">

              <div className="security-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >

                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M8 10V7a4 4 0 018 0v3"
                    strokeWidth="1.7"
                  />

                </svg>

              </div>

              <div>
                <strong>Secure Login</strong>
                <span>Your information is protected</span>
              </div>

              <div className="secure-status"></div>

            </div>

          </div>

          <p className="copyright">
            © 2026 JBN Innotech PVT LTD
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;