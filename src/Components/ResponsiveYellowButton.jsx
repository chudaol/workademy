import styled from "styled-components";
import { Device } from "../Utils/Device";
import Color from "../Utils/Color";

export const CenterButtonContainer = styled.div`
  text-align: center;
  max-width: 200px;
  max-height: 100px;
  margin: 0 auto;
  margin-top: 1em;
  padding: 0;

  @media ${Device.tablet} {
    max-width: 350px;
    min-height: 100px;
  }
`;
export const ResponsiveYellowButton = styled.button`
  color: ${Color.mainNavy};
  background: ${Color.mainYellow};
  font-size: 1.2em;
  padding: 0.7em;
  border-radius: 10px;
  cursor: pointer;

  @media ${Device.tablet} {
    padding: 0.4em 1.5em;
    font-size: 1.6em;
  }
`;
