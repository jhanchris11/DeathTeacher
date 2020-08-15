import React, { Fragment, useContext } from "react";

import messageBotContext from "../../context/messageBot/messageBotContext";
import {
  CustomButton,
  IconContainer,
  TextContainer,
  AdviceContainer,
  LogoContainer,
  TextAdvice
} from "./AdviceStyled.js";

const Advice = ({ toggleModal2 }) => {
  const { setFinishClass } = useContext(messageBotContext);

  const handleContinue = () => {
    setFinishClass(true);
    toggleModal2();
  };

  return (
    <Fragment>
      <AdviceContainer>
        <LogoContainer />
        <TextAdvice>
          Esta clase acaba de ser grabada porque el conocimiento es libre ,
          esperemos hayas aprendido.Ahora despejaras tus dudas!
        </TextAdvice>

        <CustomButton backgroundColor="#3b5998" onClick={handleContinue}>
          <IconContainer>
            <i className="fab fa-facebook-f"></i>
          </IconContainer>
          <TextContainer>Continuar con bot</TextContainer>
        </CustomButton>
      </AdviceContainer>
    </Fragment>
  );
};

export default Advice;
