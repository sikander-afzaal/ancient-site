import logo from "./logo.svg";
import "./App.css";
import head from "./Assets/1.png";
import img1 from "./Assets/2.png";
import img2 from "./Assets/3.png";
import img3 from "./Assets/4.png";
import img5 from "./Assets/5.png";
import img6 from "./Assets/6.png";
import img7 from "./Assets/7.png";
import img8 from "./Assets/8.png";
import img9 from "./Assets/9.png";
import img22 from "./Assets/10.png";
import img10 from "./Assets/11.png";
import img11 from "./Assets/12.png";
import img12 from "./Assets/13.png";
import img13 from "./Assets/14.png";
import img14 from "./Assets/15.png";
import img15 from "./Assets/16.png";
import img16 from "./Assets/17.png";
import img17 from "./Assets/18.png";
import img18 from "./Assets/19.png";
import img19 from "./Assets/20.png";
import img20 from "./Assets/21.png";
import img21 from "./Assets/22.png";
import side from "./Assets/Layer 1.png";
import side2 from "./Assets/Layer 2.png";
import side3 from "./Assets/Layer 3.png";
import side4 from "./Assets/Layer 4.png";
import side5 from "./Assets/Layer 5.png";
import side6 from "./Assets/Layer 6.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import opensea_icon from "./Assets/opensea-icon.svg";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="left-navbar">
          <a href="#" className="nav-link">
            <img src={opensea_icon} alt="" />
          </a>
          <a href="#" className="nav-link">
            <FaTwitter />
          </a>
          <a href="#" className="nav-link">
            <FaDiscord />
          </a>
        </div>
        <div className="right-navbar">
          <button className="connect">Mint</button>
        </div>
      </div>
      <img src={side} alt="" className="absolute" />
      <img src={side2} alt="" className="absolute2" />
      <img src={side3} alt="" className="absolute3" />
      <img src={side4} alt="" className="absolute4" />
      <img src={side5} alt="" className="absolute5" />
      <div className="container">
        <img src={head} alt="" className="header" />
        <div className="section1">
          <img className="title" src={img1} alt="" />
          <img className="desc" src={img2} alt="" />
          <img className="desc" src={img3} alt="" />
        </div>
        <div className="section1">
          <img className="title" src={img5} alt="" />
          <img className="desc" src={img6} alt="" />
        </div>
        <div className="section1">
          <img className="title" src={img7} alt="" />
          <img className="desc" src={img8} alt="" />
        </div>
        <div className="section1">
          <img className="title" src={img9} alt="" />
          <img className="desc" src={img22} alt="" />
          <img className="desc max-80" src={img10} alt="" />
        </div>
        <div className="section1">
          <img className="title" src={img11} alt="" />
          <img className="desc max-50" src={img12} alt="" />
          <img className="desc adjust" src={img13} alt="" />
          <img className="desc max-50" src={img14} alt="" />
          <img className="desc max-52" src={img15} alt="" />
        </div>
        <div className="section1">
          <img className="title" src={img16} alt="" />
          <img className="desc" src={img17} alt="" />
          <img className="desc" src={img18} alt="" />
          <img className="desc" src={img19} alt="" />
          <img className="desc" src={img20} alt="" />
        </div>
        <div className="section1">
          <img className="desc" src={img21} alt="" />
        </div>
        <img src={side6} alt="" className="absolute6" />
      </div>
    </div>
  );
}

export default App;
