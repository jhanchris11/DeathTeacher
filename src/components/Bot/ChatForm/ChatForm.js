import React, { useState, useContext, useEffect } from "react";
import "./ChatForm.css";
import { teacherBot } from "../../../services/botService";
import { dateNow } from "../../../helpers/dateHelper";
import { v4 as uuidv4 } from "uuid";
import messageBotContext from "../../../context/messageBot/messageBotContext";
import profesorContext from "../../../context/professor/profesorContext";
import { speechTextSlider } from "../../../helpers/speechHelper";

const ChatForm = () => {
  const [description, setDescription] = useState({
    question: ""
  });
  const { professor } = useContext(profesorContext);
  const {
    messageList,
    setMessageList,
    disableBot,
    setDisable,
    beginAudio,
    finishAudio,
    setBeginAudio,
    setFinishAudio
  } = useContext(messageBotContext);

  useEffect(() => {
    if (disableBot === false) {
      getMessageOfBot();
      setDisable(true);
    }
  }, [messageList]);

  let getMessageOfBot = async () => {
    const { data } = await teacherBot(description);
    setDescription({
      question: ""
    });
    data["id"] = uuidv4();
    setMessageList([...messageList, ...[data]]);
    setBeginAudio(true);
    await speechTextSlider(data.message);
    setFinishAudio(true);
  };

  const handlerInput = e => {
    setDescription({
      [e.target.name]: e.target.value
    });
  };

  const handlerSubmit = async e => {
    e.preventDefault();
    setDisable(false);
    setMessageList([
      ...messageList,
      ...[
        {
          id: uuidv4(),
          type: "message-row other-message",
          message: description.question,
          date: dateNow(),
          bot: "person"
        }
      ]
    ]);
  };

  return (
    <div id="chat-form">
      <img
        src={require("../../../assets/attachment-logo.svg")}
        alt="Add Attachment"
      />
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder={`Escribele a ${professor && professor["fullName"]}`}
          value={description.question}
          name="question"
          onChange={handlerInput}
        />
      </form>
    </div>
  );
};

export default ChatForm;
