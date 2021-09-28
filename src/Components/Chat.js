import React, { useEffect, useState } from "react";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useParams } from "react-router";
import db from "../firebase";
import "./Chat.css";
import ChatInput from "./ChatInput";
import Message from "./Message";

function Chat() {
  const [roomDetails, setroomDetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setroomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  console.log({ roomMessages });
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map((message) => (
          <Message props={message} />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
