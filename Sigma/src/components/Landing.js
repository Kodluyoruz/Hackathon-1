import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    Section,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

const Landing = (props) => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const toggle = () => setModal(!modal);

    const toggle1 = () => setModal1(!modal1);

    return (
        <div class="text-center">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Navbar />

        <main role="main" class="inner cover mt-12">
          <h1 class="cover-heading">Hoş geldiniz.</h1>
          <p class="lead">Biz de burada partiliyorduk</p>
          <p class="lead">
            <a href="#hackathon" class="btn btn-lg btn-secondary">
              Dahasını öğren
            </a>
          </p>
        </main>

        <main role="main" class="inner cover mt-12">
          <div id="sss">
            <h1>S.S.S.</h1>
            <br />
            <Button color="danger" onClick={toggle} size="lg" block>
              Backend gibi herhangi bir teknoloji kullanabilir miyim?
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle} className="sss">
                Backend gibi herhangi bir teknoloji kullanabilir miyim?
              </ModalHeader>
              <ModalBody className="sss">
                Evet. Her bir takım için backend veya herhangi bir teknoloji
                kullanmaları tamamen serbest olup puanlamada ek olarak avantaj
                sağlayacağından emin olabilirsiniz. Fakat backend veya web
                frameworklerinin <b>olmaması</b> takımınızı bu etkinlikte
                elemez.
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Geri dön
                </Button>
              </ModalFooter>
            </Modal>
            <Button color="danger" onClick={toggle1} size="lg" block>
              Siteye yukarıda belirtilmeyen fakat eklenmesi gerektiğini
              düşündüğüm bazı detayları ekleyebilir miyim?
            </Button>
            <Modal isOpen={modal1} toggle={toggle1} className={className}>
              <ModalHeader toggle={toggle1} className="sss">
                Siteye yukarıda belirtilmeyen fakat eklenmesi gerektiğini
                düşündüğüm bazı detayları ekleyebilir miyim?
              </ModalHeader>
              <ModalBody className="sss">
                Tabii ki. Kodluyoruz Hackathon tamamen yeni fikirlere ve
                ayrıcalıklara özen gösteren ve herkesin aklında olanları kodlara
                dökmek için tamamen serbest olduğu bir etkinliktir.
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle1}>
                  Geri dön
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </main>

        <div id="contact">
          <br />
          <br />
          <br />
          <div class="section1">
            <div class="sec1title">
              <h1>Get in touch</h1>
            </div>
          </div>
          <h5>Bir mesaj bırakın...</h5>
          <br />
          <br />
          <form>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="İsim" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Soyisim" />
              </div>
              <div class="w-100" />
              <div class="col">
                <div class="form-group">
                  <br />{" "}
                  <textarea
                    class="form-control"
                    placeholder="Mesajınız"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="w-100" />
              <Button color="primary" block value="Send" type="submit">
                Gönder <i class="fa fa-paper-plane"></i>
              </Button>
            </div>
          </form>
          <div class="section2">
            <div class="contactform">
              <br />
              <br />
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <main role="main" class="inner cover mt-12">
        <div id="team">
        <h3>Takım</h3>
        <br />
        <br />
          <div class="row">
            <div class="col-sm">

              <aside class="profile-card">
                <header>
                  <a href="https://github.com/fsuaterdogan">
                  </a>

                  <h1>Ferhat Suat Erdoğan</h1>

                  <h2>- Full Stack & AI Developer -</h2>
                </header>

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
                  </a>

                  <h1>Nuri Can Yüksel</h1>

                  <h2>- PHP -</h2>
                </header>


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
                  </a>

                  <h1>Roni Kolukısayan</h1>

                  <h2>- Full Stack Web Developer -</h2>
                </header>


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
                  </a>

                  <h1>Selin Doğa</h1>

                  <h2>- Designer -</h2>
                </header>

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
          </div>
        </main>

        <main role="main" class="inner cover mt-12">

         <div id="hackathon">
         <h2>Hackathon</h2>
          <img class="hackimg" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
          <br />
          <br />
          <p class="lead">
            <a href="https://kodluyoruz.org" class="btn btn-lg btn-secondary" target="_blank">
              Kodluyoruz.org
            </a>
          </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
    );
};
export default Landing;