import React from "react";
import { Section, Button } from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div class="container">
      <div class="text-center">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <Navbar />
          <br />
          <br />
          <br />
          <div class="section1">
            <div class="sec1title">
              <h1>Get in touch</h1>
            </div>
          </div>
          <h5>Drop us a line...</h5>
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
      </div>
    </div>
  );
};
export default Contact;
