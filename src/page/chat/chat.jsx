import "./chat.css";
import NavigationBar from "../../component/navigationBar/navigationBar";

import { useState } from "react";
const Chat = () => {
  const [visibleUserlist, setVisibleUserlist] = useState(false);
  return (
    <div className="chat">
      <div className="navgationBarFix">
        <NavigationBar title={"Chat"} />
      </div>
      <div className="chat-container">
        <div className="chat-container-chatbody">
          <div className="chat-container-chatbody-log"></div>
          <div className="chat-container-chatbody-sendmsg">
            <input
              type="text"
              className="chat-container-chatbody-sendmsg-input"
              pla
            />
            <div className="chat-container-chatbody-sendmsg-send">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="send"
                width="2em"
                height="2em"
                fill="currentColor"
                aria-hidden="true"
              >
                <defs>
                  <style></style>
                </defs>
                <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
              </svg>
            </div>
            <div className="chat-container-chatbody-sendmsg-broadcast">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="sound"
                width="2em"
                height="2em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="chat-container-memberlist"
          style={{ right: visibleUserlist ? "0px" : "-85px" }}
        >
          <div
            className="chat-container-memberlist-button"
            onClick={() => {
              setVisibleUserlist(!visibleUserlist);
            }}
          >
            ||
          </div>
          <div className="chat-container-memberlist-list">
            <div className="chat-container-memberlist-list-title">UserList</div>
            <div className="chat-container-memberlist-list-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
