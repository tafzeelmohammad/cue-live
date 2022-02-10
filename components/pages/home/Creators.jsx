import React from "react";
import CreatorDetails from "./CreatorDetails";
import styled from "styled-components";
import { PoppinsNormalWhite24px, ValignTextMiddle } from "../../../styledMixins";



function Creators(props) {
  const { title } = props;

  return (
        <div className="Creators1">
          <Title>Creators</Title>
            <CreatorDetails />
            <CreatorDetails />
      </div>
  );
}

const Creators1 = styled.div`
  width: 719px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 378px;
`;

const Title = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite24px}
  height: 38px;
  margin-bottom: -10px;
  letter-spacing: 1.44px;
  line-height: 48px;
  white-space: nowrap;
`;

export default Creators;
