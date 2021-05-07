import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../img/profile.svg";
import { SectionSliderCards } from "../home/SectionSliderCards";
export const AboutScreen = () => {
  return (
    <div>
      <div className="cover d-flex w-100 justify-content-center">
        <div style={{ marginTop: "-250px" }} className="ml-auto mr-auto">
          <h1>
            <ins>About</ins>
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
        <div className="row mt-3">
          <div className="col-md-6  offset">
            <img className="img-fluid" src={profileImage} alt="" />
          </div>
          <div className="col-md-6">
            <h1>
              Hello There My Name is Michael Rodríguez And I Love To
              programing(Most Of The Time)
            </h1>

            <p>
              Culpa ipsum eiusmod ullamco velit adipisicing nulla dolor commodo
              officia cupidatat sit. Laborum ullamco adipisicing incididunt
              minim non adipisicing eiusmod consequat enim in magna. Sint magna
              irure magna ipsum commodo enim voluptate officia. Adipisicing
              consectetur ut cupidatat incididunt mollit esse enim reprehenderit
              aliqua reprehenderit eu do. Culpa ipsum eiusmod ullamco velit
              adipisicing nulla dolor commodo officia cupidatat sit. Laborum
              ullamco adipisicing incididunt minim non adipisicing eiusmod
              consequat enim in magna. Sint magna irure magna ipsum commodo enim
              voluptate officia. Adipisicing consectetur ut cupidatat incididunt
              mollit esse enim reprehenderit aliqua reprehenderit eu do.
            </p>
          </div>
        </div>
      </div>

      <section className="container">
        <SectionSliderCards />
      </section>
    </div>
  );
};
