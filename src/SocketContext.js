import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const serverURL = "http://localhost:3001";
  const [socket, setSocket] = useState(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const newSocket = io(serverURL);
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [serverURL]);

  useEffect(() => {
    const handleUserFlow = (data) => {
      console.log(data);
      setUserList(data);
    };

    if (socket) {
      socket.on("UserFlow", handleUserFlow);
    }
    return () => {
      if (socket) {
        socket.off("UserFlow", handleUserFlow);
      }
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket, userList }}>
      {children}
    </SocketContext.Provider>
  );
};
