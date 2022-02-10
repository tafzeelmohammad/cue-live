import React from "react";
import styled from "styled-components";
import {
  PoppinsNormalGraniteGray14px,
  Border05pxWhite2,
  PoppinsNormalEerieBlack18px,
  PoppinsNormalEerieBlack14px,
  ValignTextMiddle,
} from "../../../styledMixins";
import group377141 from '../../assets/images/image-22@2x.png';


function CreatorDetails() {
  return (
    <CreatorDetails1>
      <Group38708>
        <img src={group377141} />
        <Badge src="https://anima-uploads.s3.amazonaws.com/projects/61ee6d1db3201b3bed15d3b4/releases/61ee6f9adb7528400ef92310/img/badge@2x.svg" />
        <Title>
          <Name>Praveen Narayan @praveennarayan</Name>
          <Tag>Musician</Tag>
        </Title>
      </Group38708>
      <Text>
        Started playing tabla player at the age of 9 after being inspired by the Indian tabla virtuoso Zakhir Hussain.
        Sharing my love for tabla here bi-weekly
      </Text>
    </CreatorDetails1>
  );
}

const CreatorDetails1 = styled.div`
  ${Border05pxWhite2}
  width: 650px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  align-items: flex-start;
  min-height: 154px;
  background-color: var(--concrete);
  border-radius: 13px;
`;

const Group38708 = styled.div`
  height: 88px;
  margin-left: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 356px;
`;

const Badge = styled.img`
  width: 22px;
  height: 22px;
  align-self: flex-end;
  position: relative;
    left: -25px;
`;

const Title = styled.div`
  width: 244px;
  margin-left: 24px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 75px;
`;

const Name = styled.div`
  ${PoppinsNormalEerieBlack18px}
  width: 244px;
  min-height: 52px;
  letter-spacing: 0;
  line-height: 23.1px;
`;

const Tag = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGraniteGray14px}
            height: 15px;
  margin-top: 8px;
  letter-spacing: 0.84px;
  line-height: 22.2px;
  white-space: nowrap;
`;

const Text = styled.p`
  ${PoppinsNormalEerieBlack14px}
  width: 617px;
  min-height: 42px;
  align-self: center;
  margin-top: 8px;
  letter-spacing: 0.84px;
`;

export default CreatorDetails;