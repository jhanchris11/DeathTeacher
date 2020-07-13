import React from 'react'
import './MessageList.css'
const MessageList = () => {
    return (
        <div id="chat-message-list">
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Hola </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../../assets/person.png")} alt="chris" />
                    <div className="message-text">
                      Hola Bot 
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        ¿Qué deseas saber?.
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../../assets/person.png")} alt="chris" />
                    <div className="message-text">
                        Quiero saber informacion sobre la Metodologia de Scrum
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Listo Chris , te mandare informacion sobre la Metodologia Scrum
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../../assets/person.png")} alt="chris" />
                    <div className="message-text">
                        Gracias Bot , estoy aprendiendo mas contigo , en vez de los profesores
                    </div>
                    <div className="message-time">Apr 14</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Estamos para apoyarte , que tengas un buen dia .
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../../assets/person.png")} alt="chris" />
                    <div className="message-text">
                       De igual manera.
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        :D
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
        </div>
    )
}

export default MessageList
