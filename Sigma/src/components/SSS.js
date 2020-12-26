import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SSS = (props) => {
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
          <div>
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

        <Footer />
      </div>
    </div>
  );
};
export default SSS;
