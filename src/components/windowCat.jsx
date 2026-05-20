import { useContext } from "react";
import { CatTypeContext } from "../context/CatTypeContext";
import { CloudContext } from "../context/cloudContext";
import { MoonContext } from "../context/moonContext";
import "../catWindow.css";
import RainLayer from "./rain";
import WindowDrops from "./rainWindow";
import StarLayer from "./starLayer";

function WindowCat() {
  const cycle = useContext(CatTypeContext)?.cycle;
  const cloudCycle = useContext(CloudContext)?.cycle;
  const moonCycle = useContext(MoonContext)?.cycle;

  return (
    <section id="window" className="window">
      <div className="frame">
        <div className="inner">
          {/*<StarLayer StarLayer></StarLayer> */}
          <div className="moon clickable" onClick={moonCycle}>
            <div className="spots" />
          </div>
          <div className="moonCloud clickable" onClick={cloudCycle} />
          <div className="cloud clickable" onClick={cloudCycle} />

          <div className="windowDrop" />
          <div className="glassLayer" />
          <div className="rainLayer">
            <RainLayer></RainLayer>
            <WindowDrops></WindowDrops>
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
          <div className="cat clickable" onClick={cycle}>
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
    </section>
  );
}

export default WindowCat;
