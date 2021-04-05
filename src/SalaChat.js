import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useForm } from "./hooks/useForm";

const socket = io.connect("http://localhost:4000", {});

export const SalaChat = () => {
  const [newMessage, setNewMessage] = useState([]);

  const [formValues, handleInputChange] = useForm({
    userName: "Michael",
    body: "",
  });
  const { userName, body } = formValues;

  const handleJoin = () => {
    if (userName.trim() !== "") {
      if (!!!localStorage.getItem("Rooms")) {
        const data = { lobby: "Prueba", nick: userName };
        localStorage.setItem("Rooms", JSON.stringify(data));

        const rooms = JSON.parse(localStorage.getItem("Rooms"));

        socket.emit("salaChat", { userName: rooms.nick, Room: rooms.lobby });
      } else {
        if (!!localStorage.getItem("Rooms")) {
          return alert("ya estas dentro de la sala  ");
        }
      }
    }
  };

  useEffect(() => {
    const rooms = JSON.parse(localStorage.getItem("Rooms"));
    if (!!rooms) {
      socket.emit("salaChat", { userName: rooms.nick, Room: rooms.lobby });
      socket.on("joinLobby", (data) => {
        setNewMessage([...newMessage, data]);
      });
    }
    return false;
  }, []);

  const handleMessage = () => {
    if (body.trim() !== "") {
      const rooms = JSON.parse(localStorage.getItem("Rooms"));

      socket.emit("nuevoMensage", {
        userName: rooms.nick,
        message: body,
        Room: rooms.lobby,
      });
    }
  };

  useEffect(() => {
    socket.on("newAlert", ({ message }) => {
      setNewMessage([...newMessage, message]);
    });
  }, [newMessage]);

  return (
    <>
      <div className="container-fluid   ">
        <h1>Rooms Chat</h1>
        <div className="form-row shadow mb-3 py-2 px-3 border border-secondary">
          <div className="col-md-12">
            <div className="container border border-danger message-container">
              <ul className="list-group p-3">
                {newMessage.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-12 m-3 container-buttons ">
            <div className="mb-3  d-flex justify-content-between m-2  clearfix ">
              <input
                type="text"
                className="form-control form-control-sm w-50"
                name="userName"
                value={userName}
                onChange={handleInputChange}
                placeholder="Escribe tu nombre de usuarsocket"
                autoComplete="off"
              />
              <button
                className="btn btn-primary w-50"
                type="button"
                id="joinRoom"
                onClick={handleJoin}
              >
                Join
              </button>
            </div>
          </div>
          <div className="col-md-12 m-3 container-buttons">
            <div className="mb-3  d-flex justify-content-between m-2  clearfix ">
              <input
                type="text"
                className="form-control form-control-sm w-75"
                name="body"
                value={body}
                onChange={handleInputChange}
                placeholder="Escribe un mensaje"
                autoComplete="off"
              />
              <button
                className="btn btn-primary w-50"
                type="button"
                id="roomSubmit"
                onClick={handleMessage}
              >
                Enviar
              </button>
            </div>
            <button className="btn btn-danger w-50" type="button" id="exitroom">
              salir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
