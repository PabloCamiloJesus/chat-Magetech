import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";

// Contante que retorna o primeiro usuário da lista que não seja o email já logado pelo próprio Usuário
const getUser = (users, userLogged) =>
users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {

  // Recuperando informações da coleção Users
    const [getUserItem] = useCollection(
      db.collection("users").where("email", "==", getUser(users, user))
    );
    
    // Pegando os dados do primeiro usuário da lista getUserItem
    const Avatar = getUserItem?.docs?.[0]?.data();
    const item = getUser(users, user);
    
    // Criação de Novos Chats
    const handleNewChat = () => {
      const userChat = {
        chatId: id,
        name: item.split("@")[0],
        photoURL: Avatar?.photoURL,
      };
  
      setUserChat(userChat);
    };
  
    return (
      <C.Container onClick={handleNewChat} className={active}>
        {/* Foto do Email */}
        {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}

        {/* Email */}
        <C.Name>{item.split("@")[0]}</C.Name>
      </C.Container>
    );
  };
  
  export default SidebarChatsItem;
  