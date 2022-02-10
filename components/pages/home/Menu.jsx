import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/style";


function Menu() {
  return (
    <div className="Menu1">
      <Link to="/" className="">
      <img className="Logo" src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/logo-1@2x.svg" />
      </Link>
      <div className="Group38186">
      <Link to="/" className="">
        <img className="Googleplaya1b4ed6211c913" src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/googleplay-a1b4ed6211c9--1--3@2x.svg" />
      </Link>
      <Link to="/" className="">
        <img className="Appstore6f955d329ad713" src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/appstore-6f955d329ad7--1--3@2x.svg" />
      </Link>
      </div>
      <div className="Support" src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/support@2x.svg" />
    </div>
  );
}


export default Menu;
