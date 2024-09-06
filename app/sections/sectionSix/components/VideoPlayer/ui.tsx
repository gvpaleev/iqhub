
"use client";
import React from "react";
import ReactPlayer from "react-player";
import styles from './videoPlayer.module.css'
function VideoPlayer() {
       //video path
       let videosrc = "/iqHubVidoe.mp4";

       return (
              <div className={styles.item}>
                     <ReactPlayer
                            width="1000px"
                            height="560px"
                            url={videosrc}
                            controls={true}
                            // light is usefull incase of dark mode
                            light={false}
                            // picture in picture
                            pip={true}
                     />
                     {/* <source src={videosrc} type="video/mp4" /> */}
              </div>
       );
};

export default VideoPlayer;
