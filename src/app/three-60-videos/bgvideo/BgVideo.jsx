import React from "react";
import "./BgVideo.css";
import { Button } from "@mui/material";
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
        <Button variant="contained" color="success">Start Free Trail</Button>
      </div>
    </div>
  );
};
export default BgVideo;
