import React from "react";
import "./BgVideo.css";
const BgVideo = () => {
  return (
    <div className="full-bg">
      <video autoPlay loop muted id="video">
        <source
          src="https://www.shapespark.com/v203/img/shapespark-lead.mp4"
          type="video/mp4"
        />
      </video>
      <div class="content">
        <h1>Real-time rendering in a browser</h1>
        <p>Turn architectural 3D models into online walkthroughs.</p>
        <button>Start Free Trail</button>
      </div>
    </div>
  );
};
export default BgVideo;
