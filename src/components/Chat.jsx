import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, loadMessage } from "../redux/reducers/messageReducer";
import img from "./img/chat4.png";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const messages = useSelector(state => state.messageReducer.message)

  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(loadMessage())
  }, [dispatch])

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(createMessage(value))
  };
  return (
    <>
      {open && (
        <div className="chatModal">
          <div>
            <div className="messagesBlock">
              <div className="sendMessages">
                {messages.map(item => {
                  return <div className="userText"><p>{item.text}</p></div>
                })}
              </div>
            </div>
            <div className="flexMessage">
              <div className="message">
                <input
                  placeholder="Введите текст"
                  type="text"
                  onChange={handleChange}
                  value={value}
                  className='sendInput'
                />
              </div>
              <div>
                <button className="send">Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="modal">
        <img onClick={handleOpen} className="modalImg" src={img} alt="" />
      </div>
    </>
  );
};

export default Chat;
