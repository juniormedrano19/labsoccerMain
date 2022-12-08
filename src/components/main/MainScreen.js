import React from "react";
import { Icon } from "@iconify/react";
import { MainCard } from "./MainCard";
import pic3 from "../../styles/img/pic3.svg";
import pic4 from "../../styles/img/pic4.svg";
import pitch from "../../styles/img/pitch.svg";

export const MainScreen = () => {
  return (
    <div className="main__container">
      <div className="main__Brand">
        <Icon icon="emojione-monotone:soccer-ball" className="main__icon" />

        <h3 className="main__font">LabSoccer</h3>
      </div>
      <div className="main__WhitePart">
        <MainCard />
        <div className="main__footer">Powered by Junior Medrano 💻</div>
      </div>
      {/* <div className="main__GreenPart">
         
        </div> */}
    </div>
  );
};
