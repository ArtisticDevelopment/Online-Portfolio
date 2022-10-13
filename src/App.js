import React, { useState } from "react";
import "./css/App.css";
import image from "./images/main.jpg";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import github from "./images/github.jpg";

function App() {
  return (
    <>
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Hi, I'm Silas Green</h1>
          </div>

          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
              <ul id="navigation">
                <li>
                  <a href="#contact-form">Contact</a>
                </li>
              </ul>
            </div>

            <div className="left-column">
              <img id="profile-pic" src={image} />
              <h5 style={{ textAlign: "center", lineHeight: "0" }}>
                Personalize Theme
              </h5>
              <div id="theme-options-wrapper">
                <div id="light-mode" className="theme-dot"></div>
                <div id="blue-mode" className="theme-dot"></div>
                <div id="green-mode" className="theme-dot"></div>
                <div id="purple-mode" className="theme-dot"></div>
              </div>

              <p id="settings-note" style={{ color: "black" }}>
                *Theme settings will be saved for
                <br />
                your next visit
              </p>
            </div>

            <div className="right-column">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>What I Do</h3>
                  <p style={{ color: "black" }}>
                    I started as a Photographer, but I'll end as a Software
                    Engineer.
                  </p>
                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>
                In an attempt to get out of tutorial-hell I'm building yet
                another portfolio website to actually host and use to link to my
                socials and other projects.
              </p>
              <br></br>
              <p>
                As my frontend skills become sharper I will incorportate custom
                photos into also-custom websites. Making for a truly original
                result.
              </p>
              <h4>Expertise</h4>
              <p>
                Frontend developer with primary focus on React:{" "}
                <a href="TechResume.pdf" target="_blank">
                  Download Resume
                </a>
              </p>

              <div id="skills">
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>MySql</li>
                </ul>

                <ul>
                  <li>Photography</li>
                  <li>Videography</li>
                  <li>Piano Composition</li>
                  <li>Fluent Spanish</li>
                </ul>
              </div>
            </div>
            <div className="social-links">
              <img id="social-img" src={github}></img>

              <h3>Find me on Github</h3>

              <a target="_blank" href="#">
                Github: @ArtisticDevelopment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="s1">
        <div className="main-container">
          <h3
            style={{ textAlign: "center", backgroundColor: "lightslategray" }}
          >
            A few of my projects:
          </h3>
          <div className="post-wrapper">
            <div>
              <div className="post">
                <img className="thumbnail" src={project1} />
                <div className="post-preview">
                  <h6 className="post-title">Online Portfolio</h6>
                  <p className="post-intro">
                    Congrats, you're looking at what you're looking at. Go
                    ahead, click that link. See where it goes.
                  </p>
                  <a href="#" className="post-link">
                    click meeee
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={project2} />
                <div className="post-preview">
                  <h6 className="post-title">PUBG API</h6>
                  <p className="post-intro">
                    A project in development where a gamer can enter their
                    gamertag and recieve their stats.
                  </p>
                  <a href="#" className="post-link">
                    this link works, I swear
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={project2} alt="ran" />
                <div className="post-preview">
                  <h6 className="post-title">Photography Website</h6>
                  <p className="post-intro">
                    My own custom photograpy website. I enjoyed making this one.
                  </p>
                  <a
                    href="#"
                    className="post-link"
                    style={{ paddingTop: "19px" }}
                  >
                    Go to website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="contact-wrapper">
            <h3 style={{ textAlign: "center" }}>Get in touch with me</h3>

            <form id="contact-form">
              <label>
                Name:{" "}
                <input
                  type="text"
                  className="contact-input"
                  id="input-name"
                  name="name"
                ></input>
              </label>

              <label>
                Subject:{" "}
                <input
                  required
                  type="text"
                  className="contact-input"
                  id="input-subject"
                  name="subject"
                ></input>
              </label>

              <label>
                Email:{" "}
                <input
                  type="email"
                  className="contact-input"
                  id="input-email"
                  name="email"
                ></input>
              </label>

              <label>
                Message:{" "}
                <textarea
                  id="input-text"
                  cols="30"
                  rows="10"
                  className="contact-input"
                  name="message"
                ></textarea>
              </label>

              <input id="submit-btn" type="submit" value="send"></input>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
