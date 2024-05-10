import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    background-color: hsl(0, 0%, 30%);
  }
  100% {
    background-color: hsl(360, 0%, 50%);
  }
`;

export const Skeleton = styled.div`
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: ${shine} 1s ease infinite;
  min-height: 28px;
  border-radius: 4px;
`;
