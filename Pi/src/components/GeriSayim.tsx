import * as React from 'react';
import './GeriSayim.css'

const AnaKisim = () => (
<div className="container">
  <h1 id="headline">Hackathon'a Kalan Süre:</h1>
  <div id="countdown">
    <ul>
      <li><span id="days"></span>gün</li>
      <li><span id="hours"></span>saat</li>
      <li><span id="minutes"></span>dakika</li>
      <li><span id="seconds"></span>saniye</li>
    </ul>
  </div>
  <div className="message">
    <div id="content">
      <span className="emoji">🥳</span>
      <span className="emoji">🎉</span>
      <span className="emoji">🎂</span>
    </div>
  </div>
</div>
    );

export default AnaKisim