import React from "react";
import styled from "styled-components";
import { Border05pxWhite2, ValignTextMiddle } from "../../../styledMixins";


function TermsConditions() {

  return (
    <TermsConditions1 className="terms">
      <TermsConditions2>Terms & Conditions</TermsConditions2>
      <RightCheveron src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/right-cheveron@2x.svg" />
    </TermsConditions1>
  );
}

const TermsConditions1 = styled.div`
  ${Border05pxWhite2}
  height: 63px;
  display: flex;
  padding: 0 15px;
  justify-content: flex-end;
  align-items: center;
  background-color: #f3f3f308;
  border-radius: 13px;
  margin: 0 15px 0 0;
  width: 653px;
`;

const TermsConditions2 = styled.div`
  ${ValignTextMiddle}
  width: 442px;
  height: 47px;
  font-family: var(--font-family-poppins);
  font-weight: 300;
  color: var(--pink-swan);
  font-size: var(--font-size-xxl);
  letter-spacing: 1.44px;
`;

const RightCheveron = styled.img`
  width: 20px;
  height: 11px;
  margin-left: 226px;
`;

export default TermsConditions;
