import React from "react";
import "../Loader/loader.css";
import loadvdo from "../assets/loadvdo.mp4";

const Loading = () => {
    return (
        <div className="loader">
            <video className="background-video" src={loadvdo} autoPlay loop muted></video>

            <div className="content">
                {/* <div className="bodyy">
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className="base">
                        <span></span>
                        <div className="face"></div>
                    </div>
                </div>
                <div className="longfazers">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>  
                                <h1>LOADING</h1>

                 */}
            </div>
        </div>
    );
};

export default Loading;
