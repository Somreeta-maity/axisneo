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
          <a href="#home">Home</a>
          <a href="#about">About</a>

          {/* Button leading to codeforces.html */}
          <a
            href="/codeforces.html"
            className="explore-btn"
          >
            Explore AxisNeo →
          </a>
        </div>

      </nav>


      {/* Home Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            Welcome to <span>AxisNeo</span>
          </h1>

          <p>
            Explore, learn and manage your digital resources
            with AxisNeo.
          </p>

          {/* Main button */}
          <a
            href="/codeforces.html"
            className="main-btn"
          >
            Explore AxisNeo →
          </a>

        </div>

      </section>


      {/* About Section */}
      <section id="about" className="about">

        <h2>About AxisNeo</h2>

        <p>
          AxisNeo is a platform designed to provide
          useful digital tools and resources in one place.
        </p>

      </section>

    </div>
  );
}

export default App;
