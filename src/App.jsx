import logo from "./logo.svg";
import "./App.css";
import head from "./Assets/1.png";
import img1 from "./Assets/2.png";
import img2 from "./Assets/3.png";
import img3 from "./Assets/4.png";
import img5 from "./Assets/5.png";
import img6 from "./Assets/6.png";
import side from "./Assets/Layer 1.png";
import side2 from "./Assets/Layer 2.png";
function App() {
  return (
    <div className="App">
      <img src={side} alt="" className="absolute" />
      <img src={side2} alt="" className="absolute2" />
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
      </div>
    </div>
  );
}

export default App;
