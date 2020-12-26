import * as React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  CardTitle,
  CardSubtitle,
  CardBody
} from 'reactstrap';
const Team = () => (
  <div style={{ margin: 50 }}>
    <h1 className="textAlignCenter">Team π</h1>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <img style={{ width: 250, display:'block', margin:'0 auto' }} src="https://avatars3.githubusercontent.com/u/71690868?s=460&v=4" alt="Emre Yüksel" />
        <CardBody>
          <CardTitle tag="h5">Emre Yüksel</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Psikolojik Danışman</CardSubtitle>
          <Button onClick={() => { window.open('https://github.com/Emre1555') }}>Github</Button>
        </CardBody>
      </div>
      <div style={{ flex: 1 }}>
        <img style={{ width: 250, display:'block', margin:'0 auto' }} src="https://avatars0.githubusercontent.com/u/24613925?s=460&u=e16fcbea4dc1f81d7460d9f8ae976787ff461872&v=4" alt="Eyüp Uçmaz" />
        <CardBody>
          <CardTitle tag="h5">Eyüp Uçmaz</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Frontend Dev</CardSubtitle>
          <Button onClick={() => { window.open('https://github.com/eyupucmaz') }}>Github</Button>
        </CardBody>
      </div>
      <div style={{ flex: 1 }}>
        <img style={{ width: 250, display:'block', margin:'0 auto' }} src="https://avatars0.githubusercontent.com/u/20802117?s=460&u=ed5dde35db11de2bd5ba824c2469e231cff89bd5&v=4" alt="Necmettin Çimen" />
        <CardBody>
          <CardTitle tag="h5">Necmettin Çimen</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Bilgisayar Mühendisi</CardSubtitle>
          <Button onClick={() => { window.open('https://github.com/NecmettinCimen') }}>Github</Button>
        </CardBody>
      </div>
    </div>
  </div>
);

export default connect()(Team);
