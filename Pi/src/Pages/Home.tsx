import * as React from 'react';
import { connect } from 'react-redux';
import AnaKisim from '../components/AnaKisim';
import Hackathon from '../components/Hackathon';
import Sponsorlar from '../components/Sponsorlarimiz';
import ToplulugaKatil from '../components/ToplulugaKatil';
import SSSKisim from '../components/SSSKisim';

const Home = () => (
  <div>
    <AnaKisim />
    <Hackathon />
    <ToplulugaKatil />
    <div style={{height:150}} />
    <h1 className="header-text textAlignCenter">Sıkça Sorulan Sorular</h1>
    <SSSKisim />
    <div style={{height:100}} />
    <Sponsorlar />
  </div>
);

export default connect()(Home);
