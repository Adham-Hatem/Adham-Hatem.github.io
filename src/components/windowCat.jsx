import { useContext } from "react";
import { CatTypeContext } from "../context/CatTypeContext";
import { CloudContext } from "../context/cloudContext";
import { MoonContext } from "../context/moonContext";
import cloudIcon from "../assets/cloud-icon.svg";
import "../catWindow.css";
import RainLayer from "./rain";
import WindowDrops from "./rainWindow";
import StarLayer from "./starLayer";

function WindowCat() {
  const cycle = useContext(CatTypeContext)?.cycle;
  const cloudCycle = useContext(CloudContext)?.cycle;
  const moonCycle = useContext(MoonContext)?.cycle;
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="mainContainer">
      <div id="window" className="window">
        <div className="frame">
          <div className="inner">
            {/*<StarLayer StarLayer></StarLayer> */}
            <div className="moon" />
            <div className="moonCloud" />
            <div className="cloud" />

            <div className="windowDrop" />
            <div className="glassLayer" />
            <div className="rainLayer">
              <RainLayer dropCount={isMobile ? 120 : 250} />
              <WindowDrops />
            </div>

            <div className="catReflection">
              <div className="cat">
                <div className="body">
                  <div className="tail pattern">
                    <div className="spotBrownTail" />
                  </div>
                  <div className="bodyInner pattern">
                    <div className="spotBrownRight" />
                    <div className="spotBlackLeft" />
                  </div>
                  <div className="head">
                    <div className="pattern">
                      <div className="headPattern">
                        <div className="spotBrown" />
                        <div className="spotBlack" />
                      </div>
                    </div>
                    <div className="earLeft" />
                    <div className="earRight" />

                    <div className="eyeLeft" />
                    <div className="eyeRight" />
                    <div className="mouth" />

                    <div className="whiskers">
                      <div className="whiskerTL" />
                      <div className="whiskerML" />
                      <div className="whiskerBL" />
                      <div className="whiskerTR" />
                      <div className="whiskerMR" />
                      <div className="whiskerBR" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rodVertical" />
          <div className="rodHorizontal" />

          <div className="outer">
            <div className="cat">
              <div className="body">
                <div className="bodyInner pattern">
                  <div className="spotBrownRight" />
                  <div className="spotBlackLeft" />
                </div>
                <div className="head">
                  <div className="pattern">
                    <div className="headPattern">
                      <div className="spotBrown" />
                      <div className="spotBlack" />
                    </div>
                  </div>
                  <div className="earLeft" />
                  <div className="earRight" />

                  <div className="eyeLeft" />
                  <div className="eyeRight" />
                  <div className="mouth" />

                  <div className="whiskers">
                    <div className="whiskerTL" />
                    <div className="whiskerML" />
                    <div className="whiskerBL" />
                    <div className="whiskerTR" />
                    <div className="whiskerMR" />
                    <div className="whiskerBR" />
                  </div>
                </div>

                <div className="tail pattern">
                  <div className="spotBrownTail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="controlPanel">
        <button className="windowControlButton clickable" onClick={cycle}>
          <div className="catColorButton" />
        </button>

        <button className="windowControlButton clickable" onClick={cloudCycle}>
          <img src={cloudIcon} alt="silhouette" />
        </button>

        <button className="windowControlButton clickable" onClick={moonCycle}>
          <div className="moonIcon" />
        </button>
      </div>
    </section>
  );
}

export default WindowCat;
