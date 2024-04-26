import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "../SidebarChatsItem";
import { useState } from "react";


const SidebarChats = ({ setUserChat, userChat }) => {

  // Autenticando Usuários
  const [user] = useAuthState(auth);

  // Coleta as informações da coleção chats dentro do banco de dados
  const refChat = db.collection("chats").where("users", "array-contains", user.email);

  // Uma constante para aplicar esses dados
  const [chatsSnapshot] = useCollection(refChat);

  return (
    <C.Container>
      {/* Faz uma busca por todo o documento */}
      {chatsSnapshot?.docs.map((item, index) => (
        <C.Content>

          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
            
          />
          <C.Divider />
        </C.Content>
      ))}
    </C.Container>
  );
}




export default SidebarChats