"use client";

import { Scene } from "aframe-react";
import React, { useEffect, useRef } from "react";

const Video3dPlayer = ({ videoUrl }) => {
  const videoRef = useRef();

  useEffect(() => {
    import("aframe");
    // Add any necessary initialization or event handling here
  }, []);

  const handleClick = () => {
    console.log(videoRef, "clicked");
    // if (videoRef.current) {
    videoRef.current.play();
    // }
  };

  return (
    <Scene>
      <a-assets>
        <video
          id="360-video"
          width="12"
          height="6"
          preload="auto"
          crossOrigin="anonymous"
          controls
          ref={videoRef}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <img
          id="play"
          src="static/images/intreactive.jpg"
          onClick={() => handleClick()}
        />
      </a-assets>
      {/* <a-camera>
        <a-cursor></a-cursor>
      </a-camera> */}
      <a-videosphere src="#360-video"></a-videosphere>
      {/* <a-image
        id="videoControls"
        src="#play"
        width="5"
        height="5"
        position="0 2 -10"
      ></a-image> */}
    </Scene>
  );
};

export default Video3dPlayer;
