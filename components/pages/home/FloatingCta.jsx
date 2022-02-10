import React from "react";
import BannerImage from "./BannerImage";
import BannerCTA from "./BannerCta";
import styled from "styled-components";
import "../../assets/style";

function FloatingCTA(props) {
  const { bannerImageProps, bannerCTAProps } = props;
  const ImageSrc = "https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/ka-se-kitab--balbir-punj-1-1@1x.png";
  
  return (
    <div className="FloatingCTA1">
      <div className="BannerContainerFloating">
        <BannerImage src={ImageSrc} className="banner-image-1" />
        <BannerCTA className="banner-cta-1" />
      </div>
    </div>
  );
}

export default FloatingCTA;
