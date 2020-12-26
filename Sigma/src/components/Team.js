import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Team = () => {
  return (
    <div class="text-center">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Navbar />

        <main role="main" class="inner cover mt-12">
          <div class="row">
            <div class="col-sm">
              <aside class="profile-card">
                <header>
                  <a href="https://github.com/fsuaterdogan">
                    <img src="https://randomuser.me/api/portraits/men/99.jpg" />
                  </a>

                  <h1>Ferhat Suat Erdoğan</h1>

                  <h2>- Full Stack & AI Developer -</h2>
                </header>

                <div class="profile-bio">
                  <p>Hello there!</p>
                  <p>
                    I am a full stack web developer. I mainly work with PHP,
                    HTML, CSS, JS and WordPress.
                    <br />I also play well with Photoshop, Corel Draw, After
                    Effects and other cool stuff.
                  </p>
                </div>

                <ul class="profile-social-links">
                  <li>
                    <a href="https://twitter.com/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://envato.com">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://codepen.io/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="col-sm">
              <aside class="profile-card">
                <header>
                  <a href="https://github.com/canyksl">
                    <img src="https://randomuser.me/api/portraits/men/99.jpg" />
                  </a>

                  <h1>Nuri Can Yüksel</h1>

                  <h2>- PHP -</h2>
                </header>

                <div class="profile-bio">
                  <p>Hello there!</p>
                  <p>
                    I am a full stack web developer. I mainly work with PHP,
                    HTML, CSS, JS and WordPress.
                    <br />I also play well with Photoshop, Corel Draw, After
                    Effects and other cool stuff.
                  </p>
                </div>

                <ul class="profile-social-links">
                  <li>
                    <a href="https://twitter.com/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://envato.com">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://codepen.io/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="w-100"></div>
            <br />
            <br />
            <br />
            <div class="col-sm">
              <aside class="profile-card">
                <header>
                  <a href="https://github.com/nobalpha">
                    <img src="https://randomuser.me/api/portraits/men/99.jpg" />
                  </a>

                  <h1>Roni Kolukısayan</h1>

                  <h2>- Full Stack Web Developer -</h2>
                </header>

                <div class="profile-bio">
                  <p>Hello there!</p>
                  <p>
                    I am a full stack web developer. I mainly work with PHP,
                    HTML, CSS, JS and WordPress.
                    <br />I also play well with Photoshop, Corel Draw, After
                    Effects and other cool stuff.
                  </p>
                </div>

                <ul class="profile-social-links">
                  <li>
                    <a href="https://twitter.com/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://envato.com">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://codepen.io/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="col-sm">
              <aside class="profile-card">
                <header>
                  <a href="https://github.com/selindoga">
                    <img src="https://randomuser.me/api/portraits/men/99.jpg" />
                  </a>

                  <h1>Selin Doğa</h1>

                  <h2>- Full Stack Web Developer -</h2>
                </header>

                <div class="profile-bio">
                  <p>Hello there!</p>
                  <p>
                    I am a full stack web developer. I mainly work with PHP,
                    HTML, CSS, JS and WordPress.
                    <br />I also play well with Photoshop, Corel Draw, After
                    Effects and other cool stuff.
                  </p>
                </div>

                <ul class="profile-social-links">
                  <li>
                    <a href="https://twitter.com/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://envato.com">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                    </a>
                  </li>

                  <li>
                    <a href="https://codepen.io/tutsplus">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
export default Team;
