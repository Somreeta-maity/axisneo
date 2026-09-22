
import React from "react";
import "./App.css";

function App() {
  const goToBlankPage = () => {
    window.location.href = "/blank";
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">

        <div className="logo">
          AxisNeo
        </div>

        <nav className="nav">

          <a href="#home">
            Home
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#about">
            About
          </a>

          <button
            className="login-btn"
            onClick={goToBlankPage}
          >
            Login
          </button>

        </nav>

      </header>


      {/* Main */}
      <main>

        {/* Hero */}
        <section
          className="hero"
          id="home"
        >

          <div className="hero-content">

            <p className="tagline">
              SMART • SIMPLE • POWERFUL
            </p>

            <h1>
              Build smarter.
              <br />
              Think bigger.
            </h1>

            <p className="hero-text">
              AxisNeo is a modern platform designed
              to help you organize, analyze, and manage
              your digital experience from one place.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={goToBlankPage}
              >
                Get Started
              </button>

              <button
                className="secondary-btn"
                onClick={goToBlankPage}
              >
                Learn More
              </button>

            </div>

          </div>


          {/* Dashboard Card */}
          <div className="hero-card">

            <div className="card-header">

              <span>
                Dashboard
              </span>

              <span className="status">
                ● Live
              </span>

            </div>

            <div className="dashboard-value">

              <span>
                Performance
              </span>

              <strong>
                94.8%
              </strong>

            </div>

            <div className="progress">

              <div className="progress-bar"></div>

            </div>

            <div className="stats">

              <div>
                <span>
                  Projects
                </span>

                <strong>
                  24
                </strong>
              </div>

              <div>
                <span>
                  Tasks
                </span>

                <strong>
                  128
                </strong>
              </div>

              <div>
                <span>
                  Growth
                </span>

                <strong>
                  +18%
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section
          className="features"
          id="features"
        >

          <div className="section-heading">

            <p className="tagline">
              FEATURES
            </p>

            <h2>
              Everything you need
            </h2>

            <p>
              Powerful tools wrapped in a simple
              and intuitive experience.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature-card">

              <div className="icon">
                ⚡
              </div>

              <h3>
                Fast
              </h3>

              <p>
                Designed for speed and responsiveness
                so you can focus on what matters.
              </p>

            </div>


            <div className="feature-card">

              <div className="icon">
                📊
              </div>

              <h3>
                Analytics
              </h3>

              <p>
                Turn your information into useful
                insights with clear analytics.
              </p>

            </div>


            <div className="feature-card">

              <div className="icon">
                🔒
              </div>

              <h3>
                Secure
              </h3>

              <p>
                Your information stays protected
                with a security-first approach.
              </p>

            </div>

          </div>

        </section>


        {/* About */}
        <section
          className="about"
          id="about"
        >

          <div className="about-content">

            <p className="tagline">
              ABOUT AXISNEO
            </p>

            <h2>
              A better way to work with your data.
            </h2>

            <p>
              AxisNeo brings useful information,
              intelligent tools, and a clean interface
              together in one platform.
            </p>

            {/* Explore Button */}
            <button
              className="primary-btn"
              onClick={goToBlankPage}
            >
              Explore AxisNeo
            </button>

          </div>

        </section>


        {/* CTA */}
        <section className="cta">

          <h2>
            Ready to get started?
          </h2>

          <p>
            Start building a smarter digital
            experience today.
          </p>

          <button
            className="primary-btn"
            onClick={goToBlankPage}
          >
            Create Account
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer className="footer">

        <div className="logo">
          AxisNeo
        </div>

        <p>
          © 2026 AxisNeo. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;