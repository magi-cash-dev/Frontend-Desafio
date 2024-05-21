import styled from "styled-components";

export const SpeechBalloon = styled.div`
  padding: 20px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid #5c0c09;
  border-left-width: 10px;
  color: #fff;
  border-radius: 10px;
  width: 400px;
  font-size: large;
  &:after {
    content: "";
    margin-top: -30px;
    padding-top: 0px;
    position: relative;
    bottom: -45px;
    left: 20px;
    border-width: 30px 0 0 30px;
    border-style: solid;
    border-color: #5c0c09 transparent;
    display: block;
    width: 0;
  }
`;
