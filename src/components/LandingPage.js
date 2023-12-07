import React from "react";
import "../Styles/landingPage.css";
import Navbar from "./Navbar";
import Dyning from "./Dyning";
import MugAdvertise from "./MugAdvertise";
import OurMugs from "./OurMugs";
import Functional from "./Functional";
import Plans from "./Plans";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <div className="MainPage">
        <div className="tagLine">
          <h3>enjoy free , fast delivery with exclusive deals with 70% off</h3>
        </div>
        <div className="content_page">
          <div className="content">
            <p>12 OZ STAINLESS STEEL VACUUM INSULATED TUMBLER</p>
            <h1>
              ROSTED <span>COFFEE</span> FOR YOU
            </h1>
            <p>
              12 zo strainless steel vacuum insulated tember - coffee travel mug
              spill profff with lid - theemos cup for keep hot/ice coffee , tea
              and beer(black)
            </p>

            <button id="btn1">TESTY COFFEE</button>
            <button id="btn2">READ MORE</button>
          </div>
        </div>
      </div>
      <Navbar />
      <Dyning />
      <MugAdvertise />
      <OurMugs />
      <Functional />
      <Plans/>
      <Footer/>
    </>
  );
}

export default LandingPage;
