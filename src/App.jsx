import { React, useState } from "react";
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
//team images
import team1 from "./Assets/team/team (1).png";
import team2 from "./Assets/team/team (2).png";
import team3 from "./Assets/team/team (3).png";
import team4 from "./Assets/team/team (4).png";
import team5 from "./Assets/team/team (5).png";
import Mint from "./Pages/Mint/Mint.jsx";
function App() {
  const [mint, setMint] = useState(false);
  return (
    <div className="main-wrapper">
      <div className="navbar">
        <div className="left-navbar">
          <a href="#" className="nav-link">
            <img src={opensea_icon} alt="" />
          </a>
          <a href="#" className="nav-link">
            <FaTwitter />
          </a>
          <a
            href="https://discord.com/invite/N5wDdjtDVZ"
            target={"blank"}
            className="nav-link"
          >
            <FaDiscord />
          </a>
        </div>
        <div className="right-navbar">
          <button onClick={() => setMint((prev) => !prev)} className="mint">
            mint
          </button>
        </div>
      </div>
      {mint ? (
        <Mint />
      ) : (
        <>
          <div className="App">
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
                <img className="title max28" src={img5} alt="" />
                <img className="desc" src={img6} alt="" />
              </div>
              <div className="section1">
                <img className="title" src={img7} alt="" />
                <img className="desc" src={img8} alt="" />
              </div>
              <div className="section1">
                <img className="title" src={img9} alt="" />
                <img className="desc margin-bot" src={img22} alt="" />
                <img className="desc max-80" src={img10} alt="" />
              </div>
              <div className="section1 margin-top">
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
          <div className="team">
            <h1>Founding Team</h1>
            <div className="wrapper">
              <div className="team-box">
                <a
                  target={"blank"}
                  href="https://twitter.com/thepoette"
                  className="team-img"
                >
                  <img src={team2} alt="" />
                </a>
                <div className="name">Poette</div>
                <div className="position">
                  Poetess & <br />
                  Creative Director
                </div>
              </div>
              <div className="team-box">
                <a
                  href="https://twitter.com/D34thSt4lker"
                  target={"blank"}
                  className="team-img"
                >
                  <img src={team5} alt="" />
                </a>
                <div className="name">D34thst4lker</div>
                <div className="position">Developer</div>
              </div>
              <div className="team-box">
                <a
                  href="https://www.instagram.com/ericallenphoto/"
                  target={"blank"}
                  className="team-img"
                >
                  <img src={team4} alt="" />
                </a>
                <div className="name">Eric</div>
                <div className="position">Photography</div>
              </div>
              <div className="team-box">
                <a
                  href="https://twitter.com/JJNegev"
                  target={"blank"}
                  className="team-img"
                >
                  <img src={team1} alt="" />
                </a>
                <div className="name">JJ</div>
                <div className="position">Project Manager</div>
              </div>
              <div className="team-box">
                <a
                  href="https://twitter.com/jagmot80"
                  target={"blank"}
                  className="team-img"
                >
                  <img src={team3} alt="" />
                </a>
                <div className="name">Jagmot</div>
                <div className="position">Advisor</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
