import * as React from 'react';
import './SSSKisim.css';

class SSSKisim extends React.Component {
    state = {
        active: 0
    }
    setActive = (active: number) => {
        this.setState({ active })
    }
    classNamesButton = (index: number) => `accordion ${index == this.state.active ? 'active' : ''}`
    classNamesPanel = (index: number) => `panel ${index == this.state.active ? 'block' : 'none'}`
    render() {
        return (
            <div style={{ margin: 50 }}>
                <button className={this.classNamesButton(1)} onClick={()=>this.setActive(1)}>Backend gibi herhangi bir teknoloji kullanabilir miyim?</button>
                <div className={this.classNamesPanel(1)}>
                    <p>Evet. Her bir takım için backend veya herhangi bir teknoloji kullanmaları tamamen serbest olup puanlamada ek olarak avantaj sağlayacağından emin olabilirsiniz. Fakat backend veya web frameworklerinin olmaması takımınızı bu etkinlikte elemez.</p>
                </div>

                <button className={this.classNamesButton(2)} onClick={()=>this.setActive(2)}>Siteye yukarıda belirtilmeyen fakat eklenmesi gerektiğini düşündüğüm bazı detayları ekleyebilir miyim?</button>
                <div className={this.classNamesPanel(2)}>
                    <p>Tabii ki. Kodluyoruz Hackathon tamamen yeni fikirlere ve ayrıcalıklara özen gösteren ve herkesin aklında olanları kodlara dökmek için tamamen serbest olduğu bir etkinliktir.</p>
                </div>

                <button className={this.classNamesButton(3)} onClick={()=>this.setActive(3)}>Hacathon süresince eğlenmek serbest mi?</button>
                <div className={this.classNamesPanel(3)}>
                    <p>Elbette. Sınırsız.</p>
                </div>
                
            </div>
        );
    }
}
export default SSSKisim;
