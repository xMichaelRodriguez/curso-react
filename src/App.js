import "./App.css";
import { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";
import { SalaChat } from "./SalaChat";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000", {});

export const App = () => {
  const [Chat, setChat] = useState([]);
  const [Message, setMessages] = useState([]);
  
  
  // detecta cambios en Chat
  useEffect(() => {
    socket.on("new user", ({ message }) => {
      setChat([...Chat, message]);
    });
  }, [Chat]);

  // Detecta cambios en Message
  useEffect(() => {
    socket.on("user say", (data) => {
      setMessages([...Message, data]);
    });
  }, [Message]);

  const [formValues, handleInputChange, reset] = useForm({
    text: "",
  });

  const { text } = formValues;

  const handleClick = () => {
   
    socket.emit("newMessage", text);
    reset();
  };
  return (
    <>
      <div className="container-fluid ">
        <h1>Simple Chat</h1>
        <div className="form-row">
          <div className="col-md-12">
            <div className="container border border-primary message-container">
              <ul className="list-group p-3">
                <li className="list-group-item" id="users"></li>

                {Chat.map((item, index) => (
                  <li className="list-group-item text-break" key={index}>
                    {item}
                  </li>
                ))}
                {Message.map((item, index) => (
                  <li className="list-group-item text-break" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-12 m-3 container-buttons">
            <div className="mb-3  d-flex justify-content-between m-2  clearfix ">
              <input
                type="text"
                className="form-control form-control-sm w-75"
                name="text"
                value={text}
                onChange={handleInputChange}
                placeholder="Escribe un mensaje"
                autoComplete="off"
              />
              <button
                className="btn btn-success w-50"
                type="button"
                id="submit"
                onClick={handleClick}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      <SalaChat />
    </>
  );
};
