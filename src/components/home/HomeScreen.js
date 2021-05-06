import React from "react";
import homeImage from "../../img/typewriter.svg";
import { SectionLastPosts } from "./SectionLastPosts";

import { SectionSliderCards } from "./SectionSliderCards";
export const HomeScreen = () => {
  return (
    <div>
      <div className="row  ">
        <div className="col-md-6 ">
          <h1 className=" header-text">
            Dreams of unique ideas and embrace them.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={homeImage} alt="homee" />
        </div>
      </div>

      {/* section lastest post */}
      <section className="container">
        <SectionLastPosts />
      </section>
      {/* Section Blog posts */}
      <section className="container">
        <SectionSliderCards />
      </section>
    </div>
  );
};
