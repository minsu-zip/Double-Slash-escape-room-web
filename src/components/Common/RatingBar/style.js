import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

export const Star = styled(BsFillStarFill)`
  color: ${(props) => (props.style ? "gold" : "white")};
  margin-right: 0.5rem;
`;
