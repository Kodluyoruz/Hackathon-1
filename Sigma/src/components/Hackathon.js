import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Hackathon = () => {
  return (
    <div class="text-center">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Navbar />

        <main role="main" class="inner cover mt-12">
          <h1 class="cover-heading">Cover your page.</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">
              Learn more
            </a>
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
};
export default Hackathon;
