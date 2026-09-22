import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          AxisNeo
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#coding">
            Coding Platforms
          </a>

          <a
            href="/codeforces.html"
            className="explore-btn"
          >
            Explore AxisNeo →
          </a>

        </div>

      </nav>


      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            Welcome to <span>AxisNeo</span>
          </h1>

          <p>
            Discover coding platforms, practice programming,
            improve your problem-solving skills, and explore
            new opportunities in technology.
          </p>

          <a
            href="/codeforces.html"
            className="main-btn"
          >
            Explore AxisNeo →
          </a>

        </div>

      </section>


      {/* Coding Platforms Section */}
      <section id="coding" className="coding-section">

        <h2>
          Explore New Coding Platforms
        </h2>

        <p className="section-intro">
          Coding platforms help developers practice programming,
          improve problem-solving skills, participate in contests,
          and prepare for technical interviews.
        </p>


        <div className="platform-container">


          {/* Codeforces */}
          <div className="platform-card">

            <div className="platform-icon">
              💻
            </div>

            <h3>
              Codeforces
            </h3>

            <p>
              A competitive programming platform where
              developers can solve algorithmic problems,
              participate in contests, and improve their
              coding skills.
            </p>

          </div>


          {/* LeetCode */}
          <div className="platform-card">

            <div className="platform-icon">
              🧠
            </div>

            <h3>
              LeetCode
            </h3>

            <p>
              A popular platform for practicing data
              structures and algorithms and preparing
              for technical coding interviews.
            </p>

          </div>


          {/* HackerRank */}
          <div className="platform-card">

            <div className="platform-icon">
              🚀
            </div>

            <h3>
              HackerRank
            </h3>

            <p>
              Provides programming challenges and
              skill-based exercises across multiple
              programming languages and technical areas.
            </p>

          </div>


          {/* GitHub */}
          <div className="platform-card">

            <div className="platform-icon">
              🌐
            </div>

            <h3>
              GitHub
            </h3>

            <p>
              A platform for hosting code, collaborating
              on projects, contributing to open-source
              software, and building a developer portfolio.
            </p>

          </div>

        </div>


        {/* Explore Button */}

        <div className="explore-area">

          <a
            href="/codeforces.html"
            className="main-btn"
          >
            Explore Coding Resources →
          </a>

        </div>

      </section>


      {/* About Section */}
      <section className="about">

        <h2>
          About AxisNeo
        </h2>

        <p>
          AxisNeo brings useful technology resources
          together in one place. Explore coding platforms,
          practice programming, discover new technologies,
          and continue developing your technical skills.
        </p>

      </section>

    </div>
  );
}

export default App;
