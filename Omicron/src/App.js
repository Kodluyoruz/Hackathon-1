
import './App.css';
import Live from './pages/live'
import Result from './pages/result'
import Contact from './pages/contact'
import About from './pages/about'
import Sss from './pages/sss'
import {CSSTransition} from "react-transition-group";
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import img1 from "./imgs/1.png"
import img2 from "./imgs/2.png"
import img4 from "./imgs/4.png"
function App() {
  const routes = [
    { key: 1, path: '/live', name: 'Home', Component: Live },
    { key: 2, path: '/result', name: 'About', Component: Result },
    { key: 3, path: '/contact', name: 'Contact', Component: Contact },
    { key: 5, path: '/sss', name: 'Contact', Component: Sss },
    { key: 4, path: '/', name: 'Hakkında', Component: About },
  ]
  return (
    <Router>
      <div class="row">
          <div class="col-lg-6 sutun1">
          <div className="menu">
              <ul>
                  <li><Link to="/"><i className="fas fa-home"></i>Anasayfa</Link></li>
                  <li><Link to="/live"><i className="fas fa-home"></i>Canlı Yayın</Link></li>
                  <li><Link to="/result"> <i className="fas fa-home"></i>Sonuçlar</Link></li>
                  <li><Link to="/contact"> <i className="fas fa-home"></i>Iletişim</Link></li>
                  <li><Link to="/sss"> <i className="fas fa-home"></i>S.S.S</Link></li>
              </ul>
          </div>
            <div className="baslik">
              <h1 className="baslik-buyuk">
                Hackathon'a hoşgeldiniz!
              </h1>
              <h6 className="mt-5">
              Kodluyoruz, Türkiye’de dünya çapında yazılımcılar yetiştirmek için çalışan, ülkemizi bir teknoloji geliştirme merkezi yapmayı hedefleyen bir sosyal girişim. Vizyonumuz, Türkiye’yi teknolojide dünya çapında bir yetenek merkezi haline getirmek, bunu yaparken de gençleri Endüstri 4.0’a ve daha iyi bir dünya hayaline en doğru şekilde hazırlamak.
              </h6>
              <div className="mt-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZX13KoNPSpw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          </div >
          </div>
          </div>
          <div class="col-lg-6">
            <div className="rel">
          {routes.map(({ path, Component },i) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  key={i}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          </div>
          </div>
          
       </div>
       <div className="logos">
            <img className="bir" src={img1} />
            <img className="iki" src={img2} />
            <img className="dort" src={img4} />
          </div>
    </Router>
  );
}
export default App;