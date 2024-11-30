import "./chat.css";
import NavigationBar from "../../component/navigationBar/navigationBar";

const Chat = () => {
  return (
    <div className="chat">
      <div className="navgationBarFix">
        <NavigationBar title={data} />
      </div>
      <div className="chat-container">
        <div className="chat-container-memberlist">
          <div className="chat-container-memberlist-button">Chat</div>
          <div className="chat-container-memberlist-list">Chat</div>
        </div>
        <div className="chat-container-chatbody">
          <div className="chat-container-chatbody-log"></div>
          <div className="chat-container-chatbody-sendmsg">
            <div className="chat-container-chatbody-sendmsg-input"></div>
            <div className="chat-container-chatbody-sendmsg-send"></div>
            <div className="chat-container-chatbody-sendmsg-broadcast"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
