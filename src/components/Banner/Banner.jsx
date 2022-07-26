import React from "react";
import "./Banner.css";
import bannerImg from "./../../assets/5272.jpg";
import Button from "@mui/material/Button";

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="left-side">
        <h1>Organise your real estate agents in a semantic way..</h1>
        <p className="banner-subtext">
          Dive in below to sort and keep track of your agents for better
          management
        </p>
        <div className="banner-button">
          <Button
            variant="outlined"
            onClick={() => window.location.replace("/#todos-header")}
          >
            Start
          </Button>
        </div>
      </div>
      <div className="right-side">
        <div className="banner-img">
          <img src={bannerImg} alt="Banner not found" />
        </div>
      </div>
    </div>
  );
};
