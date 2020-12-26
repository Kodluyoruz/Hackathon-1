import * as React from 'react';
import { connect } from 'react-redux';
import SSSKisim from '../components/SSSKisim';

const SSS = () => (
  <div style={{margin:50}}>
    <h1 className="textAlignCenter">SSS!</h1>
    <SSSKisim />
  </div>
);

export default connect()(SSS);
