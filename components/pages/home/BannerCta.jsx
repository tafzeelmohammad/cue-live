import React, {useEffect} from "react";
import TimeTag from "./TimeTag";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PoppinsNormalWhite24px, PoppinsNormalPinkSwan16px, ValignTextMiddle, PoppinsNormalWhite16px } from "../../../styledMixins";
import "../../assets/style";
import "../../../globals";


function BannerCTA(props) {
  const { className } = props;

   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.fjZRtf');
    const scrollTop = window.scrollY;
     scrollTop >= 1000 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  return (
    <BannerCTA1 className={`banner-cta ${className || ""}`}>
      <div className="overlap-group">
        <div className="card-title">
          <Address>08 Aug 21&nbsp;&nbsp; l&nbsp;&nbsp; 09:30 PM</Address>
          <Title className="title">Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai</Title>
        </div>

        <Link to="/signin" className="">
        <Button
          className="button"
          src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/button@2x.svg"
        /></Link>
        
        <div className="share-information">
          <div className="share">
            <Title1 className="title-1">Share</Title1>
            <Icons className="icons">
              <Iconoirfacebook
                className="iconoirfacebook"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/iconoir-facebook@2x.svg"
              />
              <Iconoirtwitter
                className="iconoirtwitter"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/iconoir-twitter@2x.svg"
              />
              <Iconoirtwitter
                className="akar-iconslink-chain"
                src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/akar-icons-link-chain@2x.svg"
              />
            </Icons>
          </div>
          <PoweredByCue className="powered-by-cue">
            <Title2 className="title-2">Powered by</Title2>
            <Icon
              className="icon"
              src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/icon@2x.svg"
            />
          </PoweredByCue>
        </div>
      </div>
    </BannerCTA1>
  );
}

const TimeTag1 = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  min-width: 229px;
  background-color: var(--black-2);
  border-radius: 20.48px;
`;

const Address = styled.p`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite16px}
            height: 24px;
  min-width: 197px;
  text-align: center;
  letter-spacing: 0.96px;
  background-color: var(--black-3);
    border-radius: 20.48px;
    padding:12px;
`;

const BannerCTA1 = styled.div`
  height: 462px;
  margin-top: 15px;
  margin-left: -37px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 446px;

  &.banner-cta.banner-cta-1 {
    top: 264px;
    left: 34px;
  }
`;

const Title = styled.h1`
  ${PoppinsNormalWhite24px}
  width: 397px;
  min-height: 100px;
  margin-top: 24px;
  text-align: center;
  letter-spacing: 1.44px;
  line-height: 31.9px;
  font-size:24px;
`;

const Button = styled.img`
  width: 264px;
  height: 96px;
  margin-top: 14px;
  margin-right: 12px;
`;

const Title1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan16px}
  width: 106px;
  height: 23px;
  text-align: center;
  letter-spacing: 0.96px;
`;

const Icons = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 139px;
`;

const Iconoirfacebook = styled.img`
  width: 26px;
  height: 25px;
`;

const Iconoirtwitter = styled.img`
  width: 26px;
  height: 25px;
  margin-left: 31px;
`;

const PoweredByCue = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  min-width: 157px;
`;

const Title2 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan16px}
            width: 104px;
  height: 24px;
  letter-spacing: 0.96px;
`;

const Icon = styled.img`
  width: 46px;
  height: 16px;
  margin-left: 7px;
`;

const OverlapGroup1 = styled.div`
  .banner-cta.banner-cta-1 & {
    background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/bg-card-1@2x.svg);
  }
`;

export default BannerCTA;
