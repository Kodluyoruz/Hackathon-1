import * as React from 'react';
import Bosluk from './Bosluk';
import './Sponsorlar.css'

const Sponsorlar = () => (
    <div>
		<Bosluk />

    <div style={{
        height: 250,
        background: '#f4f4f4'
    }}>
        <h1 className="header-text  textAlignCenter">Sponsorlarımız</h1>
        <div className='logo-container' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ margin: 50, width: 50, flex: 1, }}>
                <img alt="" src={"/assets/kablosuz999.png"} style={{ height: 50, display:'block', margin:'0 auto' }} />
            </div>
            {Box("/assets/Kodluyoruz_Turuncu logo_Yatay.png")}
            {Box("/assets/logo-smile.png")}
        </div>
    </div>
    </div>
);

const Box = (img: string) => (
    <div style={{ margin: 50, width: 40, flex: 1 }}>
        <img alt="" src={img} style={{ objectFit: 'contain',height: 75 }} />
    </div>
)

export default Sponsorlar