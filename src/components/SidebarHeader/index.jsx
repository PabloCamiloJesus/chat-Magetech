import React from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";


const SidebarHeader = ({ setUserChat }) => { // Destructuring setUserChat from props
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  // Função para adição de contato através de email
  const handleCreateChat = () => {

    // Prompt para digitação do email
    const emailInput = prompt("Escreva o e-mail desejado");

    // Return vazio se não houver email
    if (!emailInput) return;

    // Evita a possibilidade de conflito de emails dentro dos contatos
    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    // Adiciona a coleção mais um email/usuário, o qual vai ser chamado depois para criar o contato no Sidebar
    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  // Verifica se um chat existe dentro do Firebase Firestore
  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>

      {/* Imagem de Avatar do Contato buscando no email, com função para fazer Logoff */}
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />

      {/* Icons laterais do SidebarHeader */}
      <C.Options>
        <MdDonutLarge />
        {/* Icon que faz referência ao prompt de Adicionar Contatos */}
        <MdChat onClick={handleCreateChat}/>
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader
