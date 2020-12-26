import * as React from 'react';
import Box from './Box';
import './Hackathon.css';

const Hackathon = () => (
    <div className='hackathon-container'>
        <div className="header">
        <h1 className="header-text">Başvuru Süreci Devam Eden Hackathonlar</h1>
        </div>
        <div className='box-container'>
            {Box('Web Serisi #2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi enim, dapibus quis auctor eu, porttitor in velit.','30.01.2021',true,'/assets/hack1.jpeg')}
            {Box('Mobile App Serisi #1','Donec ac quam in purus pellentesque accumsan quis sit amet nulla.','16.01.2021',true,'/assets/hack2.jpeg')}
            {Box('Web Serisi #1','Phasellus elementum lacus sed luctus lobortis. Sed fermentum lorem.','26.12.2020',false,'/assets/hack3.jpeg')}
        </div>

    </div>
);



export default Hackathon