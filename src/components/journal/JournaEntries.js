import React from "react";

export const JournaEntries = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.w3schools.com/w3css/img_lights.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
          <p className="journal__entry-title">titulo</p>
          <p className="journal__entry-text">Culpa minim et Lorem ex esse amet commodo Lorem anim.</p>
      </div>
      <div className='journal__entry-date'>
          <span>Monday</span>
          <h4>14</h4>
      </div>
    </div>
  );
};
