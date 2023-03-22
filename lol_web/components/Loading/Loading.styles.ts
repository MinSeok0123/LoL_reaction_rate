import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Loading = styled.div`
  background-color: #020912;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Logo = styled.div`
  width: 650px;
  height: 650px;
  border-radius: 500px;
  border: 3px solid #2c3331;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 70%;
`;

export const LoadingText = styled.span`
  color: #abaa88;
  font-size: 25px;
`;

export const LoadingbarDiv = styled.div`
  width: 50%;
  height: 13px;
  border: 2px solid #2c3331;
  border-radius: 100px;
  position: relative;
`;
