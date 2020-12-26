import * as React from 'react';
import { connect } from 'react-redux';
import GeriSayim from '../components/GeriSayim';

const HackathonDetail = () => (
  <div>
    <GeriSayim />
  <div style={{margin:100}}>
    <h1 className="textAlignCenter">Kodluyoruz Hackathon #1</h1>
    <div style={{height:50}} />
    <div  style={{display:'block', margin:'0 auto', height:250, width:500, backgroundColor:'#FFB168'}} />
    <div style={{height:50}} />
    <p style={{fontSize:25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur diam ipsum molestie integer mi sit sit. Fringilla mi volutpat velit ornare felis bibendum. Morbi et, quis viverra accumsan, ultrices suspendisse duis. Erat tincidunt vestibulum, massa ut congue egestas mauris iaculis convallis. Id enim nullam viverra nisi lacinia volutpat magna suspendisse volutpat. Molestie lacus nunc, in mauris dolor elit in enim dui.</p>
    <div style={{height:150}} />
  </div>
  </div>
);

export default connect()(HackathonDetail);
