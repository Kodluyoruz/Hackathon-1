import React, { useEffect, useState } from "react";
import { Link, List } from "react-router-dom";
import { Button } from "reactstrap";

const Navbar = () => {
  return (
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">
          <Link to="/">Sigma</Link>
        </h3>

        <nav class="nav nav-masthead justify-content-center">
          <ul>
            <li>
              <a class="nav-link active" to="#">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link active" href="#sss">
                S.S.S.
              </a>
            </li>
            <li>
              <a class="nav-link active" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a class="nav-link active" href="#hackathon">
                Hackathon
              </a>
            </li>
            <li>
              <a class="nav-link active" href="#team">
                Team
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
