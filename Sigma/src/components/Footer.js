import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Footer = () => {
    return (
        <footer>
      <div>
        <br />
        <br />
        <form action="https://discord.gg/fBGEkpGrB5" target="_blank">
          <Button color="primary" block type="submit">
            <i class="fab fa-discord"></i> Kodluyoruz Discord Sunucusu
          </Button>
        </form>
        <br />
          <br />
          <br />
          <br />
        <div>
          <div>
            <img
              className="footerimg1"
              src="https://www.dl.dropboxusercontent.com/s/wmgk8x2qvzhyomr/kablosuzbeyin_500x.png?dl=0"
              alt=""
            />
          </div>
          <br />
          <br />
          <br />
          <div>
            <img
              className="footerimg2"
              src="https://www.dl.dropboxusercontent.com/s/tc59vxcjic3ri0o/logo-smile-slogans%C4%B1z.png?dl=0"
              alt=""
            />
          </div>
          <div >
            <img
              className="footerimg3"
              src="https://www.dl.dropboxusercontent.com/s/sykgln28ndst3ki/Kodluyoruz_Turuncu%20logo_Yatay.png?dl=0"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
    );
};
export default Footer;