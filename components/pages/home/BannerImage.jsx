import React from "react";
import styled from "styled-components";
import BannerCTA from "./BannerCta";

function BannerImage(props) {
  const { src, className } = props;

  const BannerImage = "https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/ka-se-kitab--balbir-punj-1@1x.png";

  return (
      <BannerImage1
        className={`banner-image ${className || ""}`}
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></BannerImage1>
  );
}

const BannerImage1 = styled.div`
  height: 496px;
  background-size: cover;
  background-position: 50% 0%;
  border-radius: 15px;
  background-repeat: no-repeat;

  &.banner-image.banner-image-1 {
    width: 514px;
    height: 289px;
  }
`;

export default BannerImage;
