import * as React from 'react';
import { connect } from 'react-redux';

const iframe = function () {
  return {
    __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.891651672382!2d28.970295514930456!3d41.027626326183665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9ed40117f21%3A0xdff9a7164f2c30c8!2sZemin%20%C4%B0stanbul!5e0!3m2!1sen!2sus!4v1577049297535!5m2!1sen!2sus" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
  }
}
const Iletisim = () => (
  <div>
    <div style={{ height: 20 }} />
    <div style={{ flex: 1 }} dangerouslySetInnerHTML={iframe()}></div>
    <div style={{ width: 250, position: 'absolute', top: 150, right: 100, padding: 10, backgroundColor:"#F78501" , color: "#FCFCFC", borderRadius: 5, }}>
      <p>
        <strong>Bize Ulaşın</strong>
        <strong>
          <br />Adres: </strong>Zemin İstanbul
Şahkulu, Şişhane Metro Durağı, Meşrutiyet Cd. No:125, 34421 Beyoğlu/İstanbul<br />
        <strong>
          <br />E-posta: </strong>info@kodluyoruz.org<br />
      </p>
    </div>
    <div className="row" style={{ marginTop: -150 }}>
      <div className="col-3"></div>
      <div className="col-6" style={{ borderRadius:5, margin: 50,color:"white", backgroundColor: '#7232C5', maxWidth: 600 }}>
        <h1 style={{ textAlign: 'center', margin:"50 0 0 0"}}>İletişim Formu</h1>
        <div style={{ height: 50 }} />
        <form className="row" style={{ margin: 10 }}>
          <div className="col-6">
            <label>İsim</label>
            <input placeholder="İsim" className="form-control" />
          </div>
          <div className="col-6">
            <label>E-Posta</label>
            <input placeholder="E-Posta" className="form-control" />
          </div>
          <div className="col-12">
            <label>Mesaj</label>
            <textarea className="form-control" rows={10} ></textarea>
          </div>
          <div style={{ marginTop: 10, marginBottom: 10 }} className="col-12">
            <button className="btn btn-block btn-primary col-4 offset-4" style={{backgroundColor:' #f78501',borderColor:' #f78501'}}>Gönder</button>
          </div>
        </form>
      </div>
    </div>
    <div style={{ height: 50 }} />

  </div>
);

export default connect()(Iletisim);
