import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  display: flex;
  background-color: #5c0c09;
  color: #fff;
  font-size: large;
  justify-content: center;
  border-radius: 15px;
  &:disabled {
    color: #cccccc;
    background-color: #5c0c0999;
  }
`;
