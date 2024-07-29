
"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
       //video path
       let videosrc = "/iqHubVidoe.mp4";

       return (
              <>
                     <ReactPlayer
                            width="500px"
                            height="400px"
                            url={videosrc}
                            controls={true}
                            // light is usefull incase of dark mode
                            light={false}
                            // picture in picture
                            pip={true}
                     />
                     {/* <source src={videosrc} type="video/mp4" /> */}
              </>
       );
};

export default VideoPlayer;
