import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import Home from "./pages/home";
import Novus from "./pages/novus";
import Cgiu from "./pages/cgiu";
import Ges from "./pages/ges";
import Inn from "./pages/Inn";
import Masterpiece from "./pages/masterpiece";
import Openiit18 from "./pages/openiit18";
import Openiit22 from "./pages/openiit22";
import Openiit21 from "./pages/openitt21";
import Openiit20 from "./pages/openiit20";
import Prakriti from "./pages/prakriti";
import R3 from "./pages/R3";
import Rth from "./pages/rth";
import Empower from "./pages/empower";
import About from "./pages/about";
import Siemens from "./pages/siemens";
import Header from"./components/header";
import Footer from"./components/footer";
import {BrowserRouter as Router, Route, Routes} from
"react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>  
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
        <Route  path="/openiit18" element={<Openiit18/>}/>
        <Route  path="/openiit22" element={<Openiit22/>}/>
        <Route  path="/openiit21" element={<Openiit21/>}/>
        <Route  path="/openiit20" element={<Openiit20/>}/>
        <Route  path="/novus" element={<Novus/>}/>
        <Route  path="/siemens" element={<Siemens/>}/>
        <Route  path="/cgiu" element={<Cgiu/>}/>
        <Route  path="/ges" element={<Ges/>}/>
        <Route  path="/Inn" element={<Inn/>}/>
        <Route  path="/masterpiece" element={<Masterpiece/>}/>
        <Route  path="/prakriti" element={<Prakriti/>}/>
        <Route  path="/r3" element={<R3/>}/>
        <Route  path="/rth" element={<Rth/>}/>
        <Route  path="/empower" element={<Empower/>}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
