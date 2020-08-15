import styled from "@emotion/styled";
import logo from "../../assets/logo_advice.gif";

export const CustomButton = styled.div`
  width: 70%;
  text-align: center;
  display: flex;
  color: white;
  background: ${props => props.backgroundColor};
  height: 50px;
  border-radius: 0.8em;
  border-color: ${props => props.backgroundColor};
  margin-bottom: 6px;
`;

export const IconContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
`;

export const TextContainer = styled.a`
  color: white;
  display: block;
  width: 85%;
  height: 100%;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdviceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const TextAdvice = styled.p`
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  margin: 25px 0px;
`;

export const LogoContainer = styled.div`
  background-image: url(${logo});
  background-size: 100% 100%;
  border-radius: 1.8em;
  width: 270px;
  height: 150px;
`;
