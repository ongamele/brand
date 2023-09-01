/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import "./IndexHeader.css";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div className="page-header ">
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + require("assets/img/HeroImage.png") + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        ref={pageHeader}></div>
      <div className="header-text">
        <h1 className="h1-seo">Live with Confidence</h1>
        <h3>Jose Mourinho brings confidence to pan-African Sanlam campaign.</h3>
        <Button className="view-projects-button">View Project</Button>
      </div>
    </div>
  );
}

export default IndexHeader;
