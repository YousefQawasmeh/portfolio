import dotImg from "./../../images/dot.svg";
import styled from "styled-components";
const DivDots = styled("div")`
  width: ${({ width }) => width || "400px"};
  height: ${({ height }) => height || "500px"};
  position: absolute;
  right: ${({ right }) => right || "18%"};
  top: ${({ top }) => top || "17vh"};
  max-width: ${({ max_width }) => max_width || "550px"};
  background-image: url(${dotImg});
`;

export default DivDots;
