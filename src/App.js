import React, { useState } from "react";
import "./css/App.css";
import logo from "./images/logo.jpg";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import github from "./images/github.jpg";
import resume from "../src/TechResume.pdf";
import axios from "axios";

//test test
function App() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function nameChange(event) {
    setName(event.target.value);
  }
  function subjectChange(event) {
    setSubject(event.target.value);
  }
  function emailChange(event) {
    setEmail(event.target.value);
  }
  function messageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, subject, email, message);

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: { name, subject, email, message },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent!");
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });

    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  }

  var header = document.getElementById("intro-header");

  // var typewriter = new Typewriter(header, {
  //   loop: true,
  //   delay: 100,
  // });

  return (
    <>
      <main id="main-body">
        <section className="s1">
          <div className="main-container">
            <div className="nav-wrapper">
              <div className="logo-wrapper">
                <img id="logo" className="logo" src={logo} />
                <h3 id="intro-title">ArtisticDevelopment</h3>
              </div>
              <ul id="navigation">
                <li>
                  <a href="#contact-form">Contact</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>

            <div className="intro-wrapper">
              <h2 id="intro-header">
                I'm the{" "}
                <span
                  id="typewriter"
                  data-period="2000"
                  data-type='["Developer", "Photographer", "UI/UX Designer"]'
                >
                  <span class="intro-classifier">Developer </span>/
                  <span class="intro-classifier">Photographer </span>/
                  <span class="intro-classifier">Designer </span>
                </span>
              </h2>
            </div>
          </div>
        </section>

        <section className="s2" id="about">
          <div className="main-container">
            <div className="about-wrapper">
              <div className="about-me">
                <h4>More about me</h4>
                <p>
                  In an attempt to get out of tutorial-hell I'm building yet
                  another portfolio website to actually host and use to link to
                  my socials and other projects.
                </p>
                <br></br>
                <p>
                  As my frontend skills become sharper I will incorportate
                  custom photos into also-custom websites. Making for a truly
                  original result.
                </p>
                <h4>Expertise</h4>
                <p>
                  Frontend developer with primary focus on React:{" "}
                  <a
                    href={resume}
                    download="SGtechresume.pdf"
                    target="_blank"
                    style={{ fontSize: "15px", border: "unset" }}
                  >
                    <br></br>
                    Download Resume
                  </a>
                </p>

                <div id="skills">
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>MySql</li>
                    <li>Copious Amounts of Stress Management</li>
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

                <a
                  target="_blank"
                  href="https://github.com/ArtisticDevelopment"
                >
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
                  <img className="thumbnail" src={project3} alt="ran" />
                  <div className="post-preview">
                    <h6 className="post-title">Photography Website</h6>
                    <p className="post-intro">
                      My own custom photograpy website. I enjoyed making this
                      one.
                    </p>
                    <a
                      href="https://artisticdevelopment.github.io/photog-website/"
                      className="post-link"
                      style={{ paddingTop: "19px" }}
                    >
                      go to website
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

              <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <label>
                  Name:{" "}
                  <input
                    type="text"
                    className="contact-input"
                    id="input-name"
                    name="name"
                    value={name}
                    onChange={nameChange}
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
                    value={subject}
                    onChange={subjectChange}
                  ></input>
                </label>

                <label>
                  Email:{" "}
                  <input
                    type="email"
                    className="contact-input"
                    id="input-email"
                    name="email"
                    value={email}
                    onChange={emailChange}
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
                    value={message}
                    onChange={messageChange}
                  ></textarea>
                </label>

                <input id="submit-btn" type="submit" value="send"></input>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
