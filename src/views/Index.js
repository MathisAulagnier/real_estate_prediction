import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// sections for this page
import Carousel from "./index-sections/Carousel.js";
import Examples from "./index-sections/Examples.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FormComponent from "./index-sections/FormComponent.js";
import IndexHeader from "components/Headers/IndexHeader.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <FormComponent/>
          <Carousel />
          <Examples />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Index;
