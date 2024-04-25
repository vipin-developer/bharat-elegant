"use client";
import "aframe";
import { Entity, Scene } from "aframe-react";
import React, { useEffect } from "react";

const Video3dPlayer = () => {
  useEffect(() => {
    // Add any necessary initialization or event handling here
  }, []);

  return (
    <Scene>
      <a-assets>
        <video
          id="360-video"
          width="16"
          height="9"
          preload="auto"
          crossOrigin="anonymous"
          controls
        >
          <source src="static/preview.mp4" type="video/mp4" />
        </video>
      </a-assets>
      <a-videosphere src="#360-video"></a-videosphere>
    </Scene>
  );
};

export default Video3dPlayer;
