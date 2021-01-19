import React from "react";

import hippo1 from "./hippo_sit_stroke.png";
import hippo2 from "./fatou_stroke.png";
// import hippoImp from "./hippo_flying_stoke.png";

import "./footer.scss";

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div className="footer">
      <a href="https://github.com/HippoBrothers" target="blank">
        <img src={hippo1} alt="HippoBrothers logo" width={120} />
        <img src={hippo2} alt="HippoBrothers logo" width={125} />
        <h4>Powered by HippoBrothers</h4>
      </a>
    </div>
  );
};

export default Footer;
