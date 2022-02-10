import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite16px, PoppinsNormalPinkSwan14px, ValignTextMiddle } from "../../../styledMixins";
import fbFooter from "../../assets/images/fb-footer.svg";
import twFooter from "../../assets/images/tw-footer.svg";
import instaFooter from "../../assets/images/inst-footer.svg";
import "../../assets/style.css";
import "../../../globals";

function Footer() {

  return (
    <Footer1>
      <Logo src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/logo@2x.svg" />
      <Group38710 className="footerMneu">

        
        <div className="footerMenu">
          <a href="#" className="footerMenuItem">Join Cue</a>
        </div>

        <div className="footerMenu">
          <a href="#" className="footerMenuItem">Blog</a>
        </div>

        <div className="footerMenu">
          <a href="#" className="footerMenuItem">FAQS</a>
        </div>

        <div className="footerMenu">
          <a href="#" className="footerMenuItem">Terms & Conditions</a>
        </div>

        <div className="footerMenu">
          <a href="#" className="footerMenuItem">Privacy policy</a>
        </div>

        <div className="footerMenu">
          <a href="#" className="footerMenuItem">Contact</a>
        </div>

      </Group38710>
      <div className="FooterText">
      <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis donec nunc commodo quis interdum. Ultricies cras porta risus in vel lacinia tellus ligula augue. Ullamcorper egestas in enim gravida. At amet ornare convallis posuere sed porta.
         Eu molestie malesuada aliquet mi sed sed in.</LoremIpsumDolorSi></div>
      <Social>
        <Group38711>
          <Fb src={fbFooter} />
          <Twitter src={twFooter} />
          <Twitter src={instaFooter} />
        </Group38711>
        <UpShevron src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/up-shevron@2x.svg" />
      </Social>
      <Divider src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/divider@1x.svg" />
      <X2021CUEAllRightsReserved>© 2021 CUE. All Rights Reserved</X2021CUEAllRightsReserved>
    </Footer1>
  );
}

const Footer1 = styled.div`
  width: 1680px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  min-height: 371px;
  background-color: var(--black);
`;

const Logo = styled.img`
  width: 99px;
  height: 35px;
  margin-top: 16px;
  margin-right: 1px;
`;

const Group38710 = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 672px;
`;

const Blog = styled.div`
  height: 37px;
  margin-left: 24px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 49px;
  background-color: var(--black);
`;

const Blog1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan14px}
            height: 21px;
  min-width: 33px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const FAQ = styled.div`
  height: 37px;
  margin-left: 24px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 54px;
  background-color: var(--black);
`;

const FAQs = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan14px}
            height: 21px;
  min-width: 38px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const TermsConditions = styled.div`
  height: 37px;
  margin-left: 24px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 167px;
  background-color: var(--black);
`;

const TermsConditions1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan14px}
            height: 21px;
  min-width: 151px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const PrivacyPolicy = styled.div`
  height: 37px;
  margin-left: 24px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 123px;
  background-color: var(--black);
`;

const PrivacyPolicy1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan14px}
            height: 21px;
  min-width: 107px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const Contact = styled.div`
  height: 37px;
  margin-left: 24px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 78px;
  background-color: var(--black);
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPinkSwan14px}
            height: 21px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const LoremIpsumDolorSi = styled.p`
  color: var(--pink-swan);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
  width: 1250px;
  min-height: 46px;
  margin-top: 32px;
  text-align: center;
  letter-spacing: 0.84px;
`;

const Social = styled.div`
  align-self: flex-end;
  margin-top: 32px;
  margin-right: 168.3px;
  display: flex;
  align-items: center;
  min-width: 746px;
`;

const Group38711 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 149px;
`;

const Fb = styled.img`
  width: 23px;
  height: 23px;
  margin-top: -0.05px;
`;

const Twitter = styled.img`
  width: 24px;
  height: 23px;
  margin-left: 39px;
  margin-top: -0.05px;
`;

const UpShevron = styled.img`
  width: 19px;
  height: 11px;
  margin-left: 580px;
`;

const Divider = styled.img`
  width: 1396px;
  height: 2px;
  margin-top: 39px;
`;

const X2021CUEAllRightsReserved = styled.p`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite16px}
            width: 956px;
  height: 30px;
  margin-top: 15px;
  text-align: center;
  letter-spacing: 0;
  line-height: 36.7px;
  white-space: nowrap;
`;

export default Footer;
