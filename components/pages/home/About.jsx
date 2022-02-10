import React from "react";
import styled from "styled-components";
import {
  PoppinsNormalGraniteGray14px,
  Border05pxWhite2,
  PoppinsNormalWhite24px,
  ValignTextMiddle,
} from "../../../styledMixins";


function About(props) {
  const { title } = props;

  return (
        <About1>
        <Title>About Cue</Title>
        <Frame38631>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At adipiscing non et
                magnis ultrices mauris, pellentesque pellentesque. Adipiscing imperdiet tellus congue nunc pharetra, etiam.
                Amet malesuada condimentum egestas dictum sed. Elit dignissim sem condimentum in. Rutrum mattis accumsan
                tristique congue adipiscing. Est et auctor erat vel enim consectetur. Nec eget malesuada eget ut pulvinar.
                Nibh sagittis sed curabitur purus, id augue faucibus arcu nibh. Aenean dui nunc nullam quis eros. Odio potenti
                eget adipiscing dolor auctor sed. Mi nibh dui sed fames quam morbi. Sapien sed dolor dolor augue arcu
                sollicitudin nibh elementum pellentesque. Ullamcorper in varius in viverra neque. Sapien sed dolor dolor augue
                arcu sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci blandit nisl eu. At
                adipiscing non et magnis ultrices mauris, pellentesque pellentesque. Adipiscing imperdiet tellus congue nunc
                pharetra, etiam. Amet malesuada condimentum egestas dictum sed.
            </Text>
        </Frame38631>
        </About1>
  );
}

const About1 = styled.div`
  width: 650px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 377px;
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

const Frame38631 = styled.div`
  ${Border05pxWhite2}
  height: 323px;
  margin-top: 16px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 650px;
  background-color: var(--concrete);
  border-radius: 13px;
`;

const Text = styled.p`
  ${PoppinsNormalGraniteGray14px}
  width: 617px;
  min-height: 291px;
  letter-spacing: 0.84px;
  padding-top:10px;
`;

export default About;
